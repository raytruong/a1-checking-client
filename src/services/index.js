import PouchDB from "pouchdb-browser";

const username = process.env.VUE_APP_DB_USER;
const password = process.env.VUE_APP_DB_PASS;
const data = process.env.VUE_APP_DB_DATA;
const sales = process.env.VUE_APP_DB_SALES;

const remoteDataUrl = `https://${username}:${password}@${username}.cloudantnosqldb.appdomain.cloud/${data}`;
const remoteSalesUrl = `https://${username}:${password}@${username}.cloudantnosqldb.appdomain.cloud/${sales}`;
const remoteData = new PouchDB(remoteDataUrl);
const localData = new PouchDB("localData");
const remoteSales = new PouchDB(remoteSalesUrl);
const localSales = new PouchDB("localSales");

localData
    .sync(remoteData, {
        live: true,
        retry: false,
    })
    .on("error", function() {
        console.log(remoteDataUrl);
    });

localSales
    .sync(remoteSales, {
        live: true,
        retry: false,
    })
    .on("error", function() {
        console.log(remoteSalesUrl);
    });

const db = {
    getAllEmployees: async function() {
        const data = await localData.allDocs({
            include_docs: true,
        });
        return data.rows.map(row => ({
            _id: row.doc["_id"],
            pin: row.doc["pin"],
            name: row.doc["name"],
        }));
    },
    postSale: async function(transaction) {
        return await localSales.put(transaction);
    },
    getAllSales: async function() {
        const data = await localSales.allDocs({
            include_docs: true,
        });
        return data.rows.map(row => ({
            _id: row.doc["_id"],
            _rev: row.doc["_rev"],
            employee: row.doc["employee"],
            payment: row.doc["payment"],
            items: row.doc["items"],
        }));
    },
};

export default db;
