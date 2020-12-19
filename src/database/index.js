import PouchDB from "pouchdb-browser";

const username = process.env.VUE_APP_DB_USER;
const password = process.env.VUE_APP_DB_PASS;
const name = process.env.VUE_APP_DB_NAME;

const remoteUrl = `https://${username}:${password}@${username}.cloudantnosqldb.appdomain.cloud/${name}`;
let remote = new PouchDB(remoteUrl);
let local = new PouchDB("local");

local
    .sync(remote, {
        live: true,
        retry: false,
    })
    .on("error", function() {
        console.log(remoteUrl);
    });

const api = {
    getAllEmployees: async function() {
        let data = await local.allDocs({
            include_docs: true,
        });
        return data.rows.map(row => ({
            _id: row.doc["_id"],
            name: row.doc["user"],
        }));
    },
    getEmployee: async function(_id) {
        const data = await local.get(_id);
        return data;
    },
};

export default api;
