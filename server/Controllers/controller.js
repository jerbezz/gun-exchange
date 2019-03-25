let id = 1
let guns = [
    {
        id: id++,
        make: 'Remington',
        model: 'Model 700',
        round: '.308',
        price: '450',
        phone: '801-123-4567',
        image: 'https://www.sportsmans.com/medias/remington-model-700-adl-bolt-action-rifle-package-1249976-1.jpg?context=bWFzdGVyfGltYWdlc3wyMTgzMDh8aW1hZ2UvanBlZ3xpbWFnZXMvaDg5L2gwNy84OTEzMzE0NzA5NTM0LmpwZ3xiYjk0MTRhM2JjODY1NDljYjM3YTYxNTRiNWM2YjA4MjdiMGVlOThlZDg2YjE3OTg5YWZhYjk4MTNjY2FiNmZi',
        category: 'rifle'
    },
    {
        id: id++,
        make: 'Kel-tec',
        model: 'KSG',
        round: '12 gauge',
        price: '700',
        phone: '801-345-6890',
        image: 'https://hum3d.com/wp-content/uploads/2013/11/kel-tec_ksg_600_lq_0006.jpg',
        category: 'shotgun'
    },
    {
        id: id++,
        make: 'Smith & Wesson',
        model: 'M&P 15-22',
        round: '.22 LR',
        price: '600',
        phone: '801-594-4943',
        image: 'https://cdn11.bigcommerce.com/s-7c2jlxhfym/images/stencil/1280x1280/products/13266/32574/smith-wesson-10210-001-pop__43655.1522283186.jpg?c=2&imbypass=on',
        category: 'rifle'
    }, 
    {
        id: id++,
        make: 'Barrett',
        model: '50',
        round: '.50 BMG',
        price: '1500',
        phone: '801-594-4943',
        image: 'https://i.ebayimg.com/images/i/223399488620-0-1/s-l1000.jpg',
        category: 'rifle'
    },    
    {
        id: id++,
        make: 'Remington',
        model: '870 Express',
        round: '12 Gauge',
        price: '500',
        phone: '801-697-4832',
        image: 'https://ii.cheaperthandirt.com/fcgi-bin/iipsrv.fcgi?FIF=/images/cheaperthandirt/source/7-g5077_1.tif&wid=575&cvt=jpeg',
        category: 'shotgun'
    },    
    {
        id: id++,
        make: 'Glock',
        model: '17 gen 5',
        round: '9mm',
        price: '700',
        phone: '801-545-4453',
        image: 'https://www.glockstore.com/assets/images/products/Glock-17-Gen-5_main-02.jpg?resizeid=7&resizeh=275&resizew=275',
        category: 'handgun'
    }, 
    {
        id: id++,
        make: 'Kimber',
        model: '1911',
        round: '.45 ACP',
        price: '1500',
        phone: '801-695-1409',
        image: 'https://www.eurooptic.com/images-cache/29/19/2B0B/29192B0BE8DB6CE021FA238198D3D13C75264B9D.jpg',
        category: 'handgun'
    },
    {
        id: id++,
        make: 'Russian',
        model: 'RPG 7',
        round: 'Rocket',
        price: '5000',
        phone: '801-485-1394',
        image: 'http://www.nma-fallout.com/attachments/848/',
        category: 'other'
    },        
]




module.exports = {
    read: (req, res) => {
        res.status(200).send(guns)
    },
    create: (req, res) => {
        let {make, model, round, price, phone, image, category } = req.body

        let gun = {
            id: id++,
            make,
            model,
            round,
            price,
            phone,
            image,
            category
        }
        guns.push(gun)
        res.status(200).send(guns)

    },
    update: (req, res) => {
        let {make, model, round, price, phone, image, category } = req.body

        let editGun = {
           id: req.params.id,
           make,
           model,
           round,
           price,
           phone,
           image,
           category
        }

        let index = guns.findIndex(gun => Number(gun.id) === Number(req.params.id))

        guns.splice(index, 1, editGun)
        res.status(200).send(guns)
    },
    delete: (req, res) => {
        let {id} = req.params

        let index = guns.findIndex(gun => Number(gun.id) === Number(id))
        guns.splice(index, 1)
        res.status(200).send(guns)
    }
}