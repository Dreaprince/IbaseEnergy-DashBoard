import ImageD from '../images/menu.png'
import ImageI from '../images/inventory.png'
import ImageC from '../images/user.png'
import ImageSR from '../images/request.png'
import ImageDe from '../images/monitor.png'
import ImagePH from '../images/wallet.png'
import ImageT from '../images/Vector.png'



export const sidebarData = [
   {
    images: ImageD, 
    alt: 'dashboard', 
    link: './dashboard', 
    height: '25px', 
    width: '25px',
    title: 'Dashboard'
   },
   {
    images: ImageI, 
    alt: 'inventory', 
    link: './inventory', 
    height: '25px', 
    width: '25px',
    title: 'Inventory'
   },
   {
    images: ImageC, 
    alt: 'crm', 
    link: './crm', 
    height: '25px', 
    width: '25px',
    title: 'CRM'
   },
   {
    images: ImageSR, 
    alt: 'seviceRequest', 
    link: './serviceRequest', 
    height: '25px', 
    width: '25px',
    title: 'Service Request'
   },
   {
    images: ImageDe, 
    alt: 'device', 
    link: './device', 
    height: '22px', 
    width: '22px',
    title: 'Device'
   },
   {
    images: ImagePH, 
    alt: 'paymentHistory', 
    link: './paymentHistory', 
    height: '25px', 
    width: '25px',
    title: 'Payment History'
   },
   {
    images: ImageT, 
    alt: 'Ticket', 
    link: './ticket', 
    height: '25px', 
    width: '21px',
    title: 'Ticket'
   }
]  

export const blockData = [
    {
       title: 'Total Customer',
        number: '10' 
    },
    {
      title: 'Paid Invoice',
       number: '10' 
   },
   {
      title: 'Due Invoice',
       number: '10' 
   },
   {
      title: 'Peeding Request',
       number: '10' 
   },
   {
      title: 'Monitoring Device',
       number: '10' 
   }
]

export const customerData = [
   {
      name: 'Jane Doe',
      email: 'Janeisadoe@yahoo.com',
      mobile: '07123456789'
   },
   {
      name: 'Jane Doe',
      email: 'Janeisadoe@yahoo.com',
      mobile: '07123456789'
   },
   {
      name: 'Jane Doe',
      email: 'Janeisadoe@yahoo.com',
      mobile: '07123456789'
   }
]

export const successfullData = [
   {
      des: 'Auto deposit - fri, 26th Mar, 2021 11:58:01 GMT+1',
      id: 'Payment ID: 1616756086354',
      price: '#100,000.00'
   },
   {
      des: 'Auto deposit - fri, 26th Mar, 2021 11:58:01 GMT+1',
      id: 'Payment ID: 1616756086354',
      price: '#100,000.00'
   },
   {
      des: 'Auto deposit - fri, 26th Mar, 2021 11:58:01 GMT+1',
      id: 'Payment ID: 1616756086354',
      price: '#100,000.00'
   }
]

export const installedData = [
   {
      des: 'AC:67:B2:65:03:D2',
      name: 'Jane Doe'
   },
   {
      des: 'AC:67:B2:65:03:D2',
      name: 'Jane Doe'
   },
   {
      des: 'AC:67:B2:65:03:D2',
      name: 'Jane Doe'
   }
]

export const headinData = [
   {
      heading: 'Customer Name'
   },
   {
      heading: 'Request Type'
   },
   {
      heading: 'Request Date'
   },
   {
      heading: 'Contact Person'
   },
   {
      heading: 'Status'
   },
   {
      heading: 'Action'
   }
]

export const appointmentData = [
   {
     name: "John Doe" ,
     request: 'Installation',
     date: '2021-05-20 12:25 PM',
     contact: 'John Doe - 08123456789',
     status: 'Waiting to confirm',
     action: 'Details'
   },
   {
      name: "John Doe" ,
      request: 'Installation',
      date: '2021-05-20 12:25 PM',
      contact: 'John Doe - 08123456789',
      status: 'Waiting to confirm',
      action: 'Details'
    },
    {
      name: "John Doe" ,
      request: 'Installation',
      date: '2021-05-20 12:25 PM',
      contact: 'John Doe - 08123456789',
      status: 'Waiting to confirm',
      action: 'Details'
    },
      {
     name: "John Doe" ,
     request: 'Installation',
     date: '2021-05-20 12:25 PM',
     contact: 'John Doe - 08123456789',
     status: 'Waiting to confirm',
     action: 'Details'
   }
]