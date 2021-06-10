-- CREATE TABLE Companies(
--     id INTEGER PRIMARY KEY AUTOINCREMENT,
--     company_name TEXT NOT NULL
-- );
-- CREATE TABLE Users(
--     id INTEGER PRIMARY KEY AUTOINCREMENT,
--     first_name TEXT NOT NULL,
--     companies_id INTEGER NOT NULL,
--     FOREIGN KEY (companies_id) REFERENCES Companies(id)
-- );
-- ++++++++++++++++++++++++++++++++++++++++
-- INSERT INTO Companies(company_name)
-- VALUES ('Eldian Empire'),
--     ('Marley Empire');
-- INSERT INTO Users(first_name, salary, companies_id, image_path)
-- VALUES (
--         'Eren',
--         1200,
--         1,
--         "https://cdn.vox-cdn.com/thumbor/hjfHUr5DFQRu15kELPJva6biTK8=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22405418/Screenshotter_HuluWatch_2050.jpeg"
--     ),
--     (
--         'Erwin',
--         1200,
--         1,
--         "https://static.wikia.nocookie.net/shingekinokyojin/images/d/de/Erwin_Smith_%28Anime%29_character_image.png/revision/latest?cb=20210116210802&path-prefix=ru"
--     ),
--     (
--         'Levi',
--         1500,
--         1,
--         "https://i1.sndcdn.com/artworks-dvO22qPiGA8U9hMk-roYwMQ-t500x500.jpg"
--     ),
--     (
--         'Grisha',
--         1000,
--         1,
--         "https://static.wikia.nocookie.net/shingekinokyojin/images/3/33/Grisha_Jaeger_%28Anime%29_character_image.png/revision/latest?cb=20170418234824"
--     ),
--     (
--         'Xavier',
--         800,
--         2,
--         "https://static.wikia.nocookie.net/shingekinokyojin/images/a/ad/Tom_Xaver_%28Anime%29_character_image.png/revision/latest?cb=20210322003839"
--     ),
--     (
--         'Reiner',
--         800,
--         2,
--         "https://i.pinimg.com/736x/11/ea/d9/11ead954feb6b9bd390a3e0d8d542c59.jpg"
--     ),
--     (
--         'Zeke',
--         1100,
--         2,
--         "https://static.wikia.nocookie.net/shingekinokyojin/images/4/40/Zeke_Jaeger_%28Anime%29_character_image.png/revision/latest?cb=20201213215958"
--     ),
--     (
--         'Galliard',
--         1000,
--         2,
--         "https://i.pinimg.com/originals/61/2c/d8/612cd823f6f034048c5e2b005b228d69.jpg"
--     );
INSERT INTO Posts(title, content, users_id)
VALUES (
        'Freedom',
        'Shiritain da, soto no sekai ga dou natteiru no ka.',
        1
    ),
    (
        'Tatakae',
        'Katenakya shinu. Kateba ikiru. Tataka wana kereba katenai.',
        1
    ),
    (
        'Your choice',
        'If You Begin To Regret, You will Dull Your Future Decisions And Let Others Make Your Choices For You.',
        2
    ),
    (
        'If it is Right or Wrond',
        'I dont know which option you should choose. I could never advise you on that... No matter what kind of wisdom dictates you the option you pick, no one will be able to tell if it is right or wrong until you arrive to some sort of outcome from your choice.',
        3
    );