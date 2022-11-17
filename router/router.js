const express = require('express');
const router = express.Router();

const LoginController = require('../controller/Login/Login')

const MasterDeviceTypeController = require('../controller/Master/DeviceTypeMaster')
const MasterDeviceGroupController = require('../controller/Master/DeviceGroupMaster')
const MasterDeviceServiceController = require('../controller/Master/DeviceServicesMaster')
const MasterOperatingSystemController = require('../controller/Master/OperatingSystemMaster')
const MasterServiceComplianceController = require('../controller/Master/ServiceComplianceMaster')

const DeviceTaskComplianceController = require('../controller/DeviceTaskCompliance/DeviceComp')
const DevicesTaskesController = require('../controller/DeviceTaskCompliance/DeviceTaskes')

const MasterAgentController = require('../controller/Master/AgentMaster')
const DeviceController = require('../controller/Device/device')
const MasterDeviceTaskControler = require('../controller/Master/DeviceTask')
const SeriesController = require('../controller/Master/SeriesMaster')
const countController = require('../controller/Master/Count')

const OrganizationController = require('../controller/Drizzle/Master/organizationmaster')
const LocationMasterController = require('../controller/Drizzle/Master/locationmaster')
const EmployeeMasterController = require('../controller/Drizzle/Master/employeemaster')
const AssetTypeMasterController = require('../controller/Drizzle/Master/AssetTypeMaster')
const AssetStatusMasterController = require('../controller/Drizzle/Master/AssetStatusMaster')
const ManufacturerMasterController = require('../controller/Drizzle/Master/ManufacturerMaster')
const SoftwareMasterController = require('../controller/Drizzle/Master/SoftwareMaster')
const IssueTypeMasterController = require('../controller/Drizzle/Master/IssueTypeMaster')
const PurchaseTypeMasterController = require('../controller/Drizzle/Master/PurchaseTypeMaster')
const ContractTypeMasterController = require('../controller/Drizzle/Master/ContracttypeMaster')
const PriorityMasterController = require('../controller/Drizzle/Master/PriorityMaster')
const TicketStatusMasterController = require('../controller/Drizzle/Master/TicketStatusMaster')
const BillingFrequencyMasterController = require('../controller/Drizzle/Master/BillingFrequencyMaster')
const VendorCategoryMasterController = require('../controller/Drizzle/Master/VendorCategoryMaster')
const VendorSubCategoryMasterController = require('../controller/Drizzle/Master/VendorSubCategorMaster')
const ServiceActionTypeMaster = require('../controller/Drizzle/Master/ServiceActionTpyeMaster')
const ServiceGroupMasterController = require('../controller/Drizzle/Master/ServiceGroupMaster')
const VendorCodeMasterController = require('../controller/Drizzle/Master/VendorCodeMaster')
const VendorContractMasterController = require('../controller/Drizzle/Master/VendorContractMaster')

const VendorInvoiceController = require('../controller/Drizzle/Main/VendorInvoice')
const NewAssetsController = require('../controller/Drizzle/Main/NewAssets')
const TicketsController = require('../controller/Drizzle/Main/Tickets')





router.post('/login',LoginController.UserLogin)

router.get('/totaldevicetypemaster',MasterDeviceTypeController.totaldevicetype)
router.post('/adddevicetypemaster',MasterDeviceTypeController.adddevicetype)
router.post('/getdevicetypemaster',MasterDeviceTypeController.getdevicetype)
router.post('/updatedevicetypemaster',MasterDeviceTypeController.updatedevicetype)
router.post('/updatetypestatusmaster',MasterDeviceTypeController.updatestatus)
router.get('/activedevicetype',MasterDeviceTypeController.Activedevicetype)

router.get('/totaldevicegroupmaster',MasterDeviceGroupController.totaldevicegroup)
router.post('/adddevicegroupmaster',MasterDeviceGroupController.adddevicegroup)
router.post('/getdevicegroupmaster',MasterDeviceGroupController.getdevicegroup)
router.post('/updatedevicegroupmaster',MasterDeviceGroupController.updatedevicegroup)
router.post('/updategroupstatusmaster',MasterDeviceGroupController.updategroupstatus)
router.get('/activedevicegroup', MasterDeviceGroupController.activedevicegroup)

router.get('/totaloperatingsystemmaster',MasterOperatingSystemController.totaloperatingsystem)
router.post('/addoperatingsystemmaster',MasterOperatingSystemController.addoperatingsystemmaster)
router.post('/getoperatingsystemmaster',MasterOperatingSystemController.getoperatingsystem)
router.post('/updateoperatingsystemmaster',MasterOperatingSystemController.updateoperatingsystem)
router.post('/updateoperatingstatusstatusmaster',MasterOperatingSystemController.updateoperatingstatusstatus)
router.get('/activeoperatingsystem',MasterOperatingSystemController.activeoperatingsystem)

router.get('/totaldeviceservicesmaster',MasterDeviceServiceController.totaldeviceservices)
router.post('/adddeviceservicemaster',MasterDeviceServiceController.adddeviceservice)
router.post('/getdeviceservicemaster',MasterDeviceServiceController.getdeviceservice)
router.post('/updatedeviceservicemaster',MasterDeviceServiceController.updatedeviceservice)
router.post('/updatedeviceservicestatusmaster',MasterDeviceServiceController.updatedeviceservicestatus)

router.get('/activedeviceservice',MasterDeviceServiceController.ActiveDeviceService)

router.get('/totalservicecompliancemaster',MasterServiceComplianceController.totalservicecompliance)
router.post('/addservicecompliancemaster',MasterServiceComplianceController.addservicecompliance)
router.post('/getservicecompliancemaster',MasterServiceComplianceController.getservicecompliance)
router.post('/updateservicecompliancemaster',MasterServiceComplianceController.updateservicecompliance)
router.post('/updateservicecompliancestatusmaster',MasterServiceComplianceController.updateservicecompliancestatus)
router.get('/activeservicecompliance',MasterServiceComplianceController.activeservicecompliance)

router.get('/totaldevicetaskcomp',DeviceTaskComplianceController.totaldevicetask)
router.post('/adddeviceTaskcomp',DeviceTaskComplianceController.adddevicetask)
router.post('/getdevicetaskcomp',DeviceTaskComplianceController.getdevicetask)
router.post('/updatedevicetaskcomp',DeviceTaskComplianceController.updatedevicetask)
router.post('/updatedevicecompstatus',DeviceTaskComplianceController.updatedevicecompstatus)
router.post('/getdevicetaskcompliancebyname',DeviceTaskComplianceController.getdevicetaskcompliancebyname)

router.get('/totalagentmaster',MasterAgentController.totalagent)
router.post('/addagentmaster',MasterAgentController.addagent)
router.post('/getagentmaster',MasterAgentController.getagent)
router.post('/updateagentmaster',MasterAgentController.updateagent)
router.post('/updateagentstatusmaster',MasterAgentController.updateagentstatus)
router.get('/activeagent',MasterAgentController.Activeagent)

router.get('/totaldevicetaskmaster',MasterDeviceTaskControler.totaldevicetask)
router.post('/adddevicetaskmaster',MasterDeviceTaskControler.adddevicetask)
router.post('/getdevicetaskmaster',MasterDeviceTaskControler.getdevicetask)
router.post('/updatedevicetaskmaster',MasterDeviceTaskControler.updatedevicetask)
router.post('/updatedevicetaskstatusmaster',MasterDeviceTaskControler.updatestatus)
router.get('/activedevicetask',MasterDeviceTaskControler.Activedevicetask)
router.post('/getdevicetaskfrequency',MasterDeviceTaskControler.getdevicetaskfrequency)

router.get('/totalseries',SeriesController.totalseries)
router.post('/addseries',SeriesController.addseries)
router.post('/getseries',SeriesController.getseries)
router.post('/updateseries',SeriesController.updateseries)
router.post('/updatesseriestatus',SeriesController.updatestatus)
router.get('/activeseriesmaster',SeriesController.Activeseriesmaster)

router.post('/totalcount',countController.totalcount)

router.get('/totaldevice',DeviceController.totaldevice)
router.post('/adddevice',DeviceController.AddDevice)
router.post('/getdevice',DeviceController.getdevice)
router.post('/updatedevice',DeviceController.updatedevice)
router.post('/updatedevicestatus',DeviceController.updatedevicestatus)
router.get('/activedevice',DeviceController.Activedevice)

router.post('/getdevicetaskbyname',DevicesTaskesController.getdevicetaskbyname)
router.post('/adddevicetaskes',DevicesTaskesController.adddevicetaskes)
router.post('/Getdevicestask',DevicesTaskesController.Getdevicetaskes)
router.post('/updatedevicetaskes',DevicesTaskesController.updatedevicetaskes)
router.post('/updatedevicetaskastatus',DevicesTaskesController.updatedevicetaskastatus)



router.post('/totalorganization',OrganizationController.totalOrganization)
router.post('/insertorganization',OrganizationController.insertOrganization)
router.post('/getorganization',OrganizationController.getOrganization)
router.post('/deleteorganization',OrganizationController.deleteOrganization)
router.post('/updateorganization',OrganizationController.updateOrganization)

router.post('/totalLocation',LocationMasterController.totalLocation)
router.post('/insertLocation',LocationMasterController.insertLocation)
router.post('/getLocation',LocationMasterController.getLocation)
router.post('/deleteLocation',LocationMasterController.deleteLocation)
router.post('/updateLocation',LocationMasterController.updateLocation)
router.post('/getalllocation',LocationMasterController.getAllLocation)



router.post('/totalEmployee',EmployeeMasterController.totalEmployee)
router.post('/insertEmployee',EmployeeMasterController.insertEmployee)
router.post('/getEmployee',EmployeeMasterController.getEmployee)
router.post('/deleteEmployee',EmployeeMasterController.deleteEmployee)
router.post('/updateEmployee',EmployeeMasterController.updateEmployee)
router.get('/ActiveEmployee',EmployeeMasterController.ActiveEmployee)
router.post('/EmployeeDetail',EmployeeMasterController.EmployeeDetail)


router.post('/totalAssetType',AssetTypeMasterController.totalAssetType)
router.post('/insertAssetType',AssetTypeMasterController.insertAssetType)
router.post('/getAssetType',AssetTypeMasterController.getAssetType)
router.post('/deleteAssetType',AssetTypeMasterController.deleteAssetType)
router.post('/updateAssetType',AssetTypeMasterController.updateAssetType)
router.get('/ActiveAssetesType',AssetTypeMasterController.ActiveAssetesType)

router.post('/totalAssetStatus',AssetStatusMasterController.totalAssetStatus)
router.post('/insertAssetStatus',AssetStatusMasterController.insertAssetStatus)
router.post('/getAssetStatus',AssetStatusMasterController.getAssetStatus)
router.post('/deleteAssetStatus',AssetStatusMasterController.deleteAssetStatus)
router.post('/updateAssetStatus',AssetStatusMasterController.updateAssetStatus)
router.get('/ActiveAssetesStatus',AssetStatusMasterController.ActiveAssetesStatus)


router.post('/totalManufacturer',ManufacturerMasterController.totalManufacturer)
router.post('/insertManufacturer',ManufacturerMasterController.insertManufacturer)
router.post('/getManufacturer',ManufacturerMasterController.getManufacturer)
router.post('/deleteManufacturer',ManufacturerMasterController.deleteManufacturer)
router.post('/updateManufacturer',ManufacturerMasterController.updateManufacturer)
router.get('/ActiveManufacturer',ManufacturerMasterController.ActiveManufacturer)


router.post('/totalSoftware',SoftwareMasterController.totalSoftware)
router.post('/insertSoftware',SoftwareMasterController.insertSoftware)
router.post('/getSoftware',SoftwareMasterController.getSoftware)
router.post('/deleteSoftware',SoftwareMasterController.deleteSoftware)
router.post('/updateSoftware',SoftwareMasterController.updateSoftware)
router.get('/ActiveSoftware',SoftwareMasterController.ActiveSoftware)

router.post('/totalIssueType',IssueTypeMasterController.totalIssueType)
router.post('/insertIssueType',IssueTypeMasterController.insertIssueType)
router.post('/getIssueType',IssueTypeMasterController.getIssueType)
router.post('/deleteIssueType',IssueTypeMasterController.deleteIssueType)
router.post('/updateIssueType',IssueTypeMasterController.updateIssueType)
router.get('/ActiveIssue',IssueTypeMasterController.ActiveIssue)


router.post('/totalPurchasetype',PurchaseTypeMasterController.totalPurchasetype)
router.post('/insertPurchasetype',PurchaseTypeMasterController.insertPurchasetype)
router.post('/getPurchasetype',PurchaseTypeMasterController.getPurchasetype)
router.post('/deletePurchasetype',PurchaseTypeMasterController.deletePurchasetype)
router.post('/updatePurchasetype',PurchaseTypeMasterController.updatePurchasetype)

router.post('/totalContracttype',ContractTypeMasterController.totalContracttype)
router.post('/insertContracttype',ContractTypeMasterController.insertContracttype)
router.post('/getContracttype',ContractTypeMasterController.getContracttype)
router.post('/deleteContracttype',ContractTypeMasterController.deleteContracttype)
router.post('/updateContracttype',ContractTypeMasterController.updateContracttype)
router.post('/getallcontracttype',ContractTypeMasterController.getAllContracttype)


router.post('/totalPriority',PriorityMasterController.totalPriorityMaster)
router.post('/insertPriority',PriorityMasterController.insertPriorityMaster)
router.post('/getPriority',PriorityMasterController.getPriorityMaster)
router.post('/deletePriority',PriorityMasterController.deletePriorityMaster)
router.post('/updatePriority',PriorityMasterController.updatePriorityMaster)
router.get('/ActivePriority',PriorityMasterController.ActivePriority)

router.post('/totalTicketStatus',TicketStatusMasterController.totalTicketStatus)
router.post('/insertTicketStatus',TicketStatusMasterController.insertTicketStatus)
router.post('/getTicketStatus',TicketStatusMasterController.getTicketStatus)
router.post('/deleteTicketStatus',TicketStatusMasterController.deleteTicketStatus)
router.post('/updateTicketStatus',TicketStatusMasterController.updateTicketStatus)
router.get('/ActiveTicketStatus',TicketStatusMasterController.ActiveTicketStatus)

router.post('/totalBillingFrequency',BillingFrequencyMasterController.totalBillingFrequency)
router.post('/insertBillingFrequency',BillingFrequencyMasterController.insertBillingFrequency)
router.post('/getBillingFrequency',BillingFrequencyMasterController.getBillingFrequency)
router.post('/deleteBillingFrequency',BillingFrequencyMasterController.deleteBillingFrequency)
router.post('/updateBillingFrequency',BillingFrequencyMasterController.updateBillingFrequency)
router.get('/ActiveBillingFreq',BillingFrequencyMasterController.ActiveBillingFreq)

router.post('/totalVendorCategory',VendorCategoryMasterController.totalVendorCategory)
router.post('/insertVendorCategory',VendorCategoryMasterController.insertVendorCategory)
router.post('/getVendorCategory',VendorCategoryMasterController.getVendorCategory)
router.post('/deleteVendorCategory',VendorCategoryMasterController.deleteVendorCategory)
router.post('/updateVendorCategory',VendorCategoryMasterController.updateVendorCategory)
router.post('/getallvendorcategory',VendorCategoryMasterController.getAllVendorCategory)


router.post('/totalVendorSubCategory',VendorSubCategoryMasterController.totalVendorSubCategory)
router.post('/insertVendorSubCategory',VendorSubCategoryMasterController.insertVendorSubCategory)
router.post('/getVendorSubCategory',VendorSubCategoryMasterController.getVendorSubCategory)
router.post('/deleteVendorSubCategory',VendorSubCategoryMasterController.deleteVendorSubCategory)
router.post('/updateVendorSubCategory',VendorSubCategoryMasterController.updateVendorSubCategory)
router.post('/getvendorsubcategorybyvend',VendorSubCategoryMasterController.getVendorSubCategoryby)


router.post('/totalServiceAction',ServiceActionTypeMaster.totalServiceAction)
router.post('/insertServiceAction',ServiceActionTypeMaster.insertServiceAction)
router.post('/getServiceAction',ServiceActionTypeMaster.getServiceAction)
router.post('/deleteServiceAction',ServiceActionTypeMaster.deleteServiceAction)
router.post('/updateServiceAction',ServiceActionTypeMaster.updateServiceAction)

router.post('/totalServiceGroup',ServiceGroupMasterController.totalServiceGroup)
router.post('/insertServiceGroup',ServiceGroupMasterController.insertServiceGroup)
router.post('/getServiceGroup',ServiceGroupMasterController.getServiceGroup)
router.post('/deleteServiceGroup',ServiceGroupMasterController.deleteServiceGroup)
router.post('/updateServiceGroup',ServiceGroupMasterController.updateServiceGroup)

router.post('/totalVendorCode',VendorCodeMasterController.totalVendorCode)
router.post('/insertVendorCode',VendorCodeMasterController.insertVendorCode)
router.post('/getVendorCode',VendorCodeMasterController.getVendorCode)
router.post('/deleteVendorCode',VendorCodeMasterController.deleteVendorCode)
router.post('/updateVendorCode',VendorCodeMasterController.updateVendorCode)
router.post('/getallvendor',VendorCodeMasterController.GetAllVendor)
router.post('/getvendordetails',VendorCodeMasterController.GetVendorDetails)




router.post('/totalVendorContract',VendorContractMasterController.totalVendorContract)
router.post('/insertVendorContract',VendorContractMasterController.insertVendorContract)
router.post('/getVendorContract',VendorContractMasterController.getVendorContract)
router.post('/deleteVendorContract',VendorContractMasterController.deleteVendorContract)
router.post('/updateVendorContract',VendorContractMasterController.updateVendorContract)
router.get('/ActiveVendorContract',VendorContractMasterController.ActiveVendorContract)
router.post('/VendorContractDetail',VendorContractMasterController.VendorContractDetail)


router.post('/InsertVendorInvoice',VendorInvoiceController.InsertVendorInvoice)
router.get('/PendingVendorInvoice',VendorInvoiceController.PendingVendorInvoice)
router.post('/UpdateVendorInvoice',VendorInvoiceController.UpdateVendorInvoice)


router.post('/InsertNewAssets',NewAssetsController.InsertNewAssets)
router.post('/CountNewAssets',NewAssetsController.CountNewAssets)
router.post('/GetNewAssetAssign',NewAssetsController.GetNewAssetAssign)


router.post('/InsertTicket',TicketsController.InsertTicket)
router.get('/CountTickets',TicketsController.CountTickets)





module.exports = router

