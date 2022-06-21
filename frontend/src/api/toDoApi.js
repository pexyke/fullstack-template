import http from "axios";
import config from "../app.config";

export const toDoApi = () => {
    const instance = http.create({
        baseURL: config.todoapi,
        timeout: 3000,
    });

    const post = async (path, data) => {
        try {
            const response = await instance.post(path, data, {
                headers: {
                    authorization: localStorage.getItem("token"),
                }
            });
            return response;
        } catch (err) {
            if (!err.response) return err;
            return err.response;
        }
    };

    const get = async (path) => {
        try {
            const response = await instance.get(path, {
                headers: {
                    authorization: localStorage.getItem("token"),
                }
            });
            return response;
        } catch (err) {
            if (!err.response) return err;
            return err.response;
        }
    };
    return { post, get, _instance: instance }; // _private_stuff
};

// module.exports = toDoApi();

/*

*/