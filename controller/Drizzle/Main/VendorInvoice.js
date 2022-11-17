const sql = require('mssql')
const sqlConfig = require('../../../Database/Config')
const os = require('os')

const InsertVendorInvoice = async (req,res) =>{
    const data = req.body.data;
    const userid = req.body.userid;
    let successcount = 0;
    try {
        await sql.connect(sqlConfig)
        for (let i = 0; i < data.length; i++) {
            const result = await sql.query(`insert into IPERISCOPE.dbo.tbl_vendor_invoice(vendor,account_no,invoice_no,invoice_amt,invoice_date,
                invoice_duedate,invoice_subdate,remark,reference_no,printer_counter,invoice_status,add_user_name,add_system_name,
                add_ip_address,add_date_time,status,vend_inv_uuid)
                values ('${data[i].vendor}','${data[i].accountno}','${data[i].invno}',${data[i].invamt},'${data[i].invdate}',
                '${data[i].invduedate}','${data[i].invsubdate}',
                '${data[i].remark}','${data[i].refno}','${data[i].printercount}','true','${userid}','${os.hostname()}','${req.ip}',getDate(),'Active','')`)

            if (result.rowsAffected > 0) {
                successcount = successcount + 1
            }
            else {
                res.send('Error')
                return false;
            }
        }
        if (successcount > 0) res.status(200).send('Data Added')

    }
    catch (err) {
        res.send(err)
    }
}




const PendingVendorInvoice = async (req,res) =>{
    try {
        await sql.connect(sqlConfig)
        const result = await sql.query(`select  sno,invoice_no,invoice_amt,reference_no from IPERISCOPE.dbo.tbl_vendor_invoice  WHERE invoice_status ='true' `)
        res.status(200).send(result.recordset)
    }
    catch (err) {
        res.send(err)
    }
}


const UpdateVendorInvoice = async (req,res) =>{
    const data = req.body.data;
    const userid = req.body.userid;
    let successcount = 0;

    try {
        await sql.connect(sqlConfig)
        for (let i = 0; i < data.length; i++) {
            const result = await sql.query(`UPDATE IPERISCOPE.dbo.tbl_vendor_invoice set invoice_status='false',payment_detail='${data[i].paymentDetail}',payment_amt='${data[i].PaymentAmt}',
            payment_date='${data[i].Paymentdate}',payment_remark='${data[i].Remark}',update_user_name='${userid}',update_system_name ='${os.hostname()}',
            update_ip_address ='${req.ip}',update_date_time=GETDATE() 
            where sno='${data[i].sno}'`)

            if (result.rowsAffected > 0) {
                successcount = successcount + 1
            }
            else {
                res.send('Error')
                return false;
            }
        }
        if (successcount > 0) res.status(200).send('Data Updated')

    }
    catch (err) {
        res.send(err)
    }
}




module.exports = {InsertVendorInvoice,PendingVendorInvoice,UpdateVendorInvoice}
