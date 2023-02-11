// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const mysql = require('mysql');
    console.log('mysql準備済み');
    const con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'demo',
    });
    console.log('mysql接続済み');

    //クエリログ書き出し

    const query = `SELECT * FROM user`;
    con.connect(err => {
        if (err) throw err;

        console.log('接続完了');

        con.query(query, (err, result, fields) => {
            if (err) throw err;
            console.log(result);
        });
    });
    res.status(200);
    res.end();
}