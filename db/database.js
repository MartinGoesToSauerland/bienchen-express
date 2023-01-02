const sqlite3 = require('sqlite3').verbose();
const md5 = require('md5');

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    } else {
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            firstname text,
            lastname text,
            email text UNIQUE,
            phone text,
            password text,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
            CONSTRAINT email_unique UNIQUE (email)
            )`,
        (err) => {
            if (err) {
                // Table already created
                console.log('Table already created users');
            } else {
                // Table just created, creating some rows
                const insert = 'INSERT INTO users (firstname, lastname, email, phone, password) VALUES (?,?,?,?,?)';
                db.run(insert, ["Adam","Mickiewicz","admin@example.com","0172",md5("password")]);
                db.run(insert, ["Laura","Schmidt","user@example.com","",md5("user123456")]);
                db.run(insert, ["August","Momper","user2@example.com","",md5("password")]);
                db.run(insert, ["Heidi","Herrmann","user3@example.com","",md5("password")]);
                db.run(insert, ["Sven","Zeuner","user4@example.com","",md5("password")]);
                db.run(insert, ["Susen","Fischer","user5@example.com","",md5("password")]);
                db.run(insert, ["Karl","Georgi","user6@example.com","",md5("password")]);
                db.run(insert, ["Franziska","Karaszow","user7@example.com","",md5("password")]);
                db.run(insert, ["Franziska","Karaszow","user8@example.com","",md5("password")]);
                db.run(insert, ["Gregori","Karaszow","user9@example.com","",md5("password")]);
                db.run(insert, ["Samuel","Freitag","user10@example.com","",md5("password")]);
                db.run(insert, ["Gerad","Przybysz","user11@example.com","",md5("password")]);
                db.run(insert, ["Antonia","Roloff","user12@example.com","",md5("password")]);
                db.run(insert, ["Dirk","Roloff","user13@example.com","",md5("password")]);
                db.run(insert, ["Guido","Schmidt","user14@example.com","",md5("password")]);
                db.run(insert, ["Paul","von An","user15@example.com","",md5("password")]);
                db.run(insert, ["Markus","Wendicke","user16@example.com","",md5("password")]);
                db.run(insert, ["Christoph","Elgeti","user17@example.com","",md5("password")]);
                db.run(insert, ["Ralf","Bobusch","user18@example.com","",md5("password")]);
                db.run(insert, ["Ewelina","Schmidt","user19@example.com","",md5("password")]);
                db.run(insert, ["Bartek","Owoc","user20@example.com","",md5("password")]);
                db.run(insert, ["Paulian","Owoc","user21@example.com","",md5("password")]);
                db.run(insert, ["Kasia","Schniadecka","user22@example.com","",md5("password")]);
                db.run(insert, ["Kszyciek","Nieiewm","user23@example.com","",md5("password")]);
                db.run(insert, ["Michel","Admowitsch","user24@example.com","",md5("password")]);
                db.run(insert, ["Anja","Lehmann","user25@example.com","",md5("password")]);
                db.run(insert, ["Sina","Schulze","user26@example.com","",md5("password")]);
                db.run(insert, ["Peggy","Kong","user27@example.com","",md5("password")]);
                db.run(insert, ["Jan","Schütte","user28@example.com","",md5("password")]);
                db.run(insert, ["Tobias","Haberland","user28@example.com","",md5("password")]);
                db.run(insert, ["Tobias","Schütze","user29@example.com","",md5("password")]);
                db.run(insert, ["Kristina","Schäfer","user30@example.com","",md5("password")]);
                db.run(insert, ["Silke","Brunk","user31@example.com","",md5("password")]);
                db.run(insert, ["Alexander","Haase","user32@example.com","",md5("password")]);
                db.run(insert, ["Hartmut","Bar","user33@example.com","",md5("password")]);
                db.run(insert, ["Jan","Kafka","user34@example.com","",md5("password")]);
                db.run(insert, ["Peggy","Kong","user35@example.com","",md5("password")]);
                db.run(insert, ["Susan","Tonka","user36@example.com","",md5("password")]);
                db.run(insert, ["Gordon","Bednacrek","user37@example.com","",md5("password")]);
                db.run(insert, ["Sven","Bagdonat","user38@example.com","",md5("password")]);
                db.run(insert, ["Anitta","Lehman","user39@example.com","",md5("password")]);
                db.run(insert, ["Thomas","Eberwien","user40@example.com","",md5("password")]);
                db.run(insert, ["Dirk","Englert","user41@example.com","",md5("password")]);
                db.run(insert, ["Alexander","Sparr","user42@example.com","",md5("password")]);
                db.run(insert, ["Anegla","Moritz","user43@example.com","",md5("password")]);
                db.run(insert, ["Marta","Sieckie","user44@example.com","",md5("password")]);
                db.run(insert, ["Kristina","Pinz","user45@example.com","",md5("password")]);
                db.run(insert, ["Julia","Elgtie","user46@example.com","",md5("password")]);
                db.run(insert, ["Jona","Siecke","user47@example.com","",md5("password")]);
                db.run(insert, ["Matthias","Engel","user48@example.com","",md5("password")]);
                db.run(insert, ["Falk","Thomas","user49@example.com","",md5("password")]);
            }
        });

        // {id:1, name: "Nike", models: [], img_name: "nike", country_ids: [1,2,3,4]},
        db.run(`CREATE TABLE areas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            geo_json text,
            name text,
            country text,
            state text,
            zip text,
            street text,
            size_qm INTEGER,
            description text,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
            )`,
        (err) => {
            if (err) {
                // Table already created
                console.log('Table already created areas');
            } else {
                // Table just created, creating some rows
                var insert = 'INSERT INTO areas (geo_json, name, country, state, zip, street, size_qm, description) VALUES (?,?,?,?,?,?,?,?)'
                db.run(insert, [ JSON.stringify({ "type": "Feature", "properties": { "id": 1, "Wiese001": "Wiese Hollebener Bienenglück",
                "Areal": "Holleben", "Flaeche_qm": 6491 }, "geometry": { "type": "Polygon",
                "coordinates": [ [ [ 11.9024726, 51.4281604 ], [ 11.9029897, 51.4296162 ], [
                11.9028741, 51.429686 ], [ 11.9027651, 51.4297207 ], [ 11.902665, 51.4297122 ], [
                11.9026095, 51.4296663 ], [ 11.9025032, 51.4294493 ], [ 11.9023742, 51.429294 ],
                [ 11.9023125, 51.4291474 ], [ 11.9023059, 51.429042 ], [ 11.9021106, 51.4288984
                ], [ 11.9020153, 51.4287356 ], [ 11.9017915, 51.4283573 ], [ 11.9017738,
                51.4283183 ], [ 11.9018028, 51.4282933 ], [ 11.9019118, 51.4282684 ], [
                11.9023393, 51.4282004 ], [ 11.9024498, 51.428178 ], [ 11.9024725, 51.4281604 ] ]
                ] } }) ,"Wiese Hollebener Bienenglück", "Deutschland", "Sachsen-Anhalt", "06188", "Ernst-Thälmann-Strasse (L 163)", 6491, "Holleben" ]);
            }
        });

        db.run(`CREATE TABLE parcels (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            area_id INTEGER,
            status text,
            updated_at text,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
            )`,
        (err) => {
            if (err) {
                // Table already created
                console.log('Table already created parcels');
            } else {
                const s = Math.floor(6491 / 50);
                // Table just created, creating some rows
                var insert = 'INSERT INTO parcels (area_id, status) VALUES (?,?)'
                for(i =0; i < s; i++) {
                    db.run(insert, [1,'free']);
                }
            }
        });

        db.run(`CREATE TABLE contracts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            parcel_id INTEGER,
            active INTEGER,
            start_at text,
            end_at text,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
            )`,
        (err) => {
            if (err) {
                // Table already created
                console.log('Table already created contracts');
            } else {
                // Table just created, creating some rows
                var insert = 'INSERT INTO contracts (user_id, parcel_id, active, start_at, end_at) VALUES (?,?,?,?,?)'
                db.run(insert, [1, 1, 0, "2022-06-01", "2023-06-01" ]); // , "2022-06-01", "2023-02-01"
                db.run(insert, [2, 2, 0, "2022-06-01", "2023-06-01" ]); // , "2022-06-01", "2023-02-01"
                db.run(insert, [3, 3, 0, "2022-06-01", "2023-06-01" ]); // , "2022-06-01", "2023-02-01"
                db.run(insert, [4, 4, 0, "2022-06-01", "2023-06-01" ]); // , "2022-06-01", "2023-02-01"
                db.run(insert, [5, 5, 0, "2022-06-01", "2023-06-01" ]); // , "2022-06-01", "2023-02-01"
                db.run(insert, [6, 6, 0, "2022-06-01", "2023-06-01" ]);
                // db.run(insert, [2, 3, 1, null, null ]);
                // db.run(insert, [2, 4, 1, null, null ]);
                // db.run(insert, [3, 5, 1, null, null ]);
                // db.run(insert, [4, 6, 1, null, null ]);
            }
        });

        /*
        db.run(`CREATE TABLE models (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text,
            img_name text,
            brand_id INTEGER
            )`,
        (err) => {
            if (err) {
                // Table already created
                console.log('Table already created models.');
            } else {
                // Table just created, creating some rows
                var insert = 'INSERT INTO models (name, img_name, brand_id) VALUES (?,?,?)'
                db.run(insert, ["model_1","http://localhost:3000/assets/img/models/model_1.png", 2])
                db.run(insert, ["model_2","http://localhost:3000/assets/img/models/model_2.png", 2])
                db.run(insert, ["model_2","http://localhost:3000/assets/img/models/model_3.png", 2])
                db.run(insert, ["model_2","http://localhost:3000/assets/img/models/model_4.png", 2]);
                db.run(insert, ["model_2","http://localhost:3000/assets/img/models/model_5.png", 2])
                db.run(insert, ["model_2","http://localhost:3000/assets/img/models/model_6.png", 2])
                db.run(insert, ["model_2","http://localhost:3000/assets/img/models/model_7.png", 2])
                db.run(insert, ["model_2","http://localhost:3000/assets/img/models/model_8.png", 2])
            }
        });


        db.run(`CREATE TABLE countries (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            code text,
            name text
            )`,
        (err) => {
            if (err) {
                // Table already created
                console.log('Table already created country.');
            } else {
                // Table just created, creating some rows
                var insert = 'INSERT INTO countries (code, name) VALUES (?,?)'
                db.run(insert, ["de","Germany"])
                db.run(insert, ["fr","France"])
                db.run(insert, ["uk","United Kindom"])
                db.run(insert, ["ru","Russia"])
            }
        });

        db.run(`CREATE TABLE cities (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            code text,
            name text,
            country_id INTEGER
            )`,
        (err) => {
            if (err) {
                // Table already created
                console.log('Table already created cities.');
            } else {
                // Table just created, creating some rows
                var insert = 'INSERT INTO cities (code, name, country_id) VALUES (?,?,?)'
                db.run(insert, ["xx","Berlin",1]);
                db.run(insert, ["xx","Hamburg",1]);
                db.run(insert, ["xx","Paris",2]);
            }
        });

        db.run(`CREATE TABLE country_brands (
            country_id text,
            brand_id text
            )`,
        (err) => {
            if (err) {
                // Table already created
                console.log('Table already created country_brands.');
            } else {
                // Table just created, creating some rows
                var insert = 'INSERT INTO country_brands (country_id, brand_id) VALUES (?,?)'
                db.run(insert, [1,1])
                db.run(insert, [1,2])
                db.run(insert, [1,3])
                db.run(insert, [1,4])
                db.run(insert, [2,1])
                db.run(insert, [2,2])
                db.run(insert, [3,1]);
            }
        });

        db.run(`CREATE TABLE routes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text,
            geodata text,
            creator_id INTEGER,
            city_id INTEGER
            )`,
        (err) => {
            if (err) {
                // Table already created
                console.log('Table already created routes.');
            } else {
                // Table just created, creating some rows
                var insert = 'INSERT INTO routes (name, creator_id, city_id) VALUES (?,?,?)'
                db.run(insert, ["Route 1 city 1", 1, 1]);
                db.run(insert, ["Route 2 city 1", 1, 1]);
                db.run(insert, ["Route 3 city 1", 1, 1]);
                db.run(insert, ["Route 4 city 1", 1, 1]);
                db.run(insert, ["Route 5 city 2", 1, 2]);
                db.run(insert, ["Route 6 city 2", 1, 2]);
                db.run(insert, ["Route 7 city 2", 1, 2]);
                db.run(insert, ["Route 8 city 2", 1, 2]);
            }
        });

        db.run(`CREATE TABLE surveys (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            route_id INTEGER,
            image_path text,
            createdAt text
            )`,
        (err) => {
            if (err) {
                // Table already created
                console.log('Table already created surveys.');
            } else {
                // Table just created, creating some rows
                var insert = 'INSERT INTO surveys (user_id, route_id, image_path, createdAt) VALUES (?,?,?,?)'
                db.run(insert, [1, 1, "","2022-10-10"]);
            }
        });

        db.run(`CREATE TABLE survey_items (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            survey_id INTEGER,
            brand_id INTEGER,
            model_id INTEGER,
            gender text,
            createdAt text
            )`,
        (err) => {
            if (err) {
                // Table already created
                console.log('Table already created survey_items.');
            } else {
                // Table just created, creating some rows
                var insert = 'INSERT INTO survey_items (survey_id, brand_id, model_id, gender, createdAt) VALUES (?,?,?,?,?)'
                db.run(insert, [1,1, 1, "female","2022-10-10"]);
            }
        });
        */
    }
});


module.exports = db