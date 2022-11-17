const sql = require('mssql')
const sqlConfig = require('../../../Database/Config')
const os = require('os')

const InsertTicket = async (req, res) => {
    const emp_id = req.body.emp_id;
    const emp_name = req.body.emp_name;
    const asset_type = req.body.asset_type;
    const asset_serial = req.body.asset_serial;
    const location = req.body.location;
    const assign_ticket = req.body.assign_ticket;
    const type_of_issue = req.body.type_of_issue;
    const email_id = req.body.email_id;
    const ticket_date = req.body.ticket_date;
    const ticket_status = req.body.ticket_status;
    const ticket_subject = req.body.ticket_subject;
    const priority = req.body.priority;
    const issue_discription = req.body.issue_discription;
    const remarks = req.body.remarks;

    const user_id= req.body.user_id;

    try {
        await sql.connect(sqlConfig)
        const result = await sql.query(`
        insert into IPERISCOPE.dbo.tbl_ticket(emp_id,emp_name,asset_type,asset_serial,location,assign_ticket,
            type_of_issue,email_id,ticket_date,ticket_status,ticket_subject,priority,issue_discription,remarks,
            status,add_user_name,add_system_name,add_ip_address,add_date_time)
            values ('${emp_id}','${emp_name}','${asset_type}','${asset_serial}','${location}','${assign_ticket}','${type_of_issue}',
            '${email_id}','${ticket_date}','${ticket_status}','${ticket_subject}','${priority}','${issue_discription}','${remarks}',
            'Active','${user_id}','${os.hostname()}','${req.ip}',getdate())
        `)
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



const CountTickets = async (req, res) => {
    try {
        await sql.connect(sqlConfig)
        const result = await sql.query(`SELECT COUNT(sno) as count FROM IPERISCOPE.dbo.tbl_ticket with (nolock) `)
       
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


module.exports = { InsertTicket,CountTickets}
