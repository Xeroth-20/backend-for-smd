const express = require('express');
const app = express();

/* random number function */
const getRandomNumber = (min = 150, max = 99998) => {
    return min > max ? Math.floor(Math.random() * min) + 1 : Math.floor(min + (Math.random() * (max - min))) + 1;
}

const getPercentFromRandomNumber = (min = -45555) => {
    return getRandomNumber(min) / 100;
}

const generateSnUser = () => {
    const snUser = {
        firstname: 'Jhonatan',
        lastname: 'Castillo',
        email: 'jhonatancastillox@gmail.com',
        totalFollowers: 0,
        stats: {
            facebook: {
                snUsername: 'JhonatanCastillo',
                totalFollowers: getRandomNumber(),
                todayFollowers: getRandomNumber(-5555, 6666),
                overview: {
                    pageViews: {
                        today: getRandomNumber(),
                        increase: getPercentFromRandomNumber(),
                    },
                    pageLikes: {
                        today: getRandomNumber(),
                        increase: getPercentFromRandomNumber()
                    }
                }
            },
            twitter: {
                snUsername: 'JCowo',
                totalFollowers: getRandomNumber(),
                todayFollowers: getRandomNumber(-5555, 6666),
                overview: {
                    likes: {
                        today: getRandomNumber(),
                        increase: getPercentFromRandomNumber(),
                    },
                    retweets: {
                        today: getRandomNumber(),
                        increase: getPercentFromRandomNumber()
                    }
                }
            },
            instagram: {
                snUsername: 'JC',
                totalFollowers: getRandomNumber(),
                todayFollowers: getRandomNumber(-5555, 6666),
                overview: {
                    likes: {
                        today: getRandomNumber(),
                        increase: getPercentFromRandomNumber(),
                    },
                    profileViews: {
                        today: getRandomNumber(),
                        increase: getPercentFromRandomNumber()
                    }
                }
            },
            youtube: {
                snUsername: 'FriedAvocado',
                totalFollowers: getRandomNumber(),
                todayFollowers: getRandomNumber(-5555, 6666),
                overview: {
                    likes: {
                        today: getRandomNumber(),
                        increase: getPercentFromRandomNumber(),
                    },
                    views: {
                        today: getRandomNumber(),
                        increase: getPercentFromRandomNumber()
                    }
                }
            }
        }
    }

    for (let sn in snUser.stats) {
        snUser.totalFollowers += snUser.stats[sn].totalFollowers;
    }

    return snUser;
}

/* engine */
app.set('engine', 'html');

/* middlewares */
app.use(express.static('./public'));

/* cors */
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
})

/* port */
app.set('port', process.env.PORT | 3000);

/* routes */
app.get('/', async (req, res) => {
    res.send('A')
});

app.get('/api/v1/user', async (req, res) => {
    res.json(generateSnUser());
});

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
