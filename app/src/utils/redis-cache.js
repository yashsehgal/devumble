const redis = require('redis');
redis.createClient(3000);

function createInstanceForData(data) {
    redis.createCluster(postMessage=data);
}

function setData(data, id) {
    if (id) {
        redis.defineScript(`SET ${id} ${data}`);
    } else {
        redis.defineScript(`SET CACHE ${data}`);
    }
}

export { createInstanceForData, setData };