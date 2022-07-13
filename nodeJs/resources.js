module.exports = {
    events: [
        {
            EventPlanner:'Marina',
            numberEP:'3202330987',
            secPlanner:'George',
            numberSP:'3014554663',
            services:{
                first:'Furniture',
                second:'Sound',
                third:'cathering'
            },
            specific:'Wedding',
            radio:'Bello'
        },
        {
            EventPlanner:'Alcaldía de Bello',
            numberEP:'3202330987',
            secPlanner:'George',
            numberSP:'3014554663',
            services:{
                first:'Carps',
                second:'chairs',
                third:'cathering'
            },
            specific:'Social',
            radio:'Bello'
        }
    ],
    services:[
        {
            service:'Sound',
            type:'Corporative',
            capacity:'15-30',
            price:400
        },
        {
            service:'Catering Service',
            type:'Social',
            capacity:'15-30',
            price:8
        }
    ],
    ourStaff:[
        {
            name: 'Andrés Gómez',
            age:'30 years old',
            addres:'Cll 50 #34-32',
            charge:'Logistics Manager',
            phone:'310506270'
        }
    ],
    scheduledEvent:[
        {
            
            events:0,
            services:0,
            ourStaff:0,
            dateEvent: Date(),
            editDateEvent: new Date(),
            siteEvent:"",
            fullPrice:0


        }
    ]


};