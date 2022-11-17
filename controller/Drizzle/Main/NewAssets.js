const sql = require('mssql')
const sqlConfig = require('../../../Database/Config')
const os = require('os')

const InsertNewAssets = async (req, res) => {
    const new_asset_type_id = req.body.new_asset_type_id;
    const asset_type = req.body.asset_type;
    const asset_tag = req.body.asset_tag;
    const serial_no = req.body.serial_no;
    const location = req.body.location;
    const manufacture = req.body.manufacture;

    const software = req.body.software;
    const model = req.body.model;
    const asset_status = req.body.asset_status;
    const description = req.body.description;
    const purchase_type = req.body.purchase_type;
    const purchase_date = req.body.purchase_date;

    const company = req.body.company;
    const vendor = req.body.vendor;
    const invoice_no = req.body.invoice_no;
    const rent_per_month = req.body.rent_per_month;
    const purchases_price = req.body.purchases_price;
    const latest_inventory = req.body.latest_inventory;

    const asset_name = req.body.asset_name;
    const asset_assign = req.body.asset_assign;
    const asset_assign_empid = req.body.asset_assign_empid;
    const remarks = req.body.remarks;


    const userid = req.body.userid;


    try {
        await sql.connect(sqlConfig)
        const result = await sql.query(`insert into IPERISCOPE.dbo.tbl_new_assets (new_asset_type_id,asset_type,asset_tag,serial_no,location,manufacture,
            software,model,asset_status,description,purchase_type,purchase_date,company,vendor,invoice_no,
            rent_per_month,purchases_price,latest_inventory,asset_name,asset_assign,asset_assign_empid,remarks,add_user_name,
            add_system_name,add_ip_address,add_date_time,status,new_assets_uuid)
            values ('${new_asset_type_id}','${asset_type}','${asset_tag}','${serial_no}','${location}','${manufacture}','${software}','${model}',
            '${asset_status}','${description}','${purchase_type}','${purchase_date}','${company}','${vendor}','${invoice_no}','${rent_per_month}',
            '${purchases_price}','${latest_inventory}','${asset_name}','${asset_assign}','${asset_assign_empid}','${remarks}','${userid}',
            '${os.hostname()}','${os.hostname()}',getDate(),'Active','')`)

        if (result.rowsAffected[0] > 0) {
            res.status(200).send('Data Added')
        }
        else {
            res.send('Error')
        }
    }
    catch (err) {
        res.send(err)
    }
}


const CountNewAssets = async (req, res) => {
    const asset_type = req.body.asset_type;

    try {
        await sql.connect(sqlConfig)
        const result = await sql.query(`SELECT COUNT(sno) as count FROM IPERISCOPE.dbo.tbl_new_assets
        WHERE asset_type='${asset_type}'`)

        if (result.rowsAffected[0] > 0) {
            res.status(200).send(result.recordset[0])
        }
        else {
            res.send('Error')
        }
        
    }
    catch (err) {
        res.send(err)
    }
}


const GetNewAssetAssign = async (req, res) => {
    const asset_assign_empid = req.body.asset_assign_empid;

    try {
        await sql.connect(sqlConfig)
        const result = await sql.query(`select asset_type,serial_no from IPERISCOPE.dbo.tbl_new_assets with (nolock) where
        asset_assign_empid= '${asset_assign_empid}'
        `)

        if (result) {
            res.status(200).send(result.recordset)
        }
        else {
            res.send('Error')
        }
    }
    catch (err) {
        res.send(err)
    }
}





module.exports = { InsertNewAssets,CountNewAssets,GetNewAssetAssign}
