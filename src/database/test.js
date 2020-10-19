const Database = require('./db.js')
const saveorphanage = require('./saveorphanage.js')

Database.then(async db => {
    //inserindo dados na tabela
    await saveorphanage(db, {
        lat: "-26.8807883",
        lng: "-49.0885652",
        name: "Lar das meninas",
        whatsapp: "999999999",
        about: "Pestando assistencia a crianças de 06 a 15 anos que se encontren em situações de risco e/ou vulnerabilidade",
        images: [
            "https://images.unsplash.com/photo-1598539961915-040bb3be3f69?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            
            "https://images.unsplash.com/photo-1594753154778-273013529793?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: '1'
    })

    //consultar dados sa tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consulta especifica de apenas um orfanato
    // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    // console.log(orphanage)

    // console.log(await db.run("DELETE FROM orphanages"))
})

