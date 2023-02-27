import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
    FormControl,
    InputLabel,
    MenuItem,
    TextField,
    Select,
    Button,
} from "@mui/material";
import { axiosInstance } from "../../utils/axiosIntance";
import { message } from "antd";

const CreateStore = (props) => {
    const history = useHistory();
    const [data, setData] = useState({
        fullName: "",
        address: "",
    });

    const createStore = () => {
        console.log(data);
        if (data.fullName.length > 0 && data.address.length > 0) {
            axiosInstance
                .post("/api/user/create", data)
                .then((data) => {
                    console.log(data.data);
                    if (data.data) {
                        message.success("Ustunlikli!");
                        history.push({
                            pathname: "/create/" + data.data.id,
                        });
                        setData({
                            fullName: "",
                            address: "",
                        });
                        props.onClose();
                    } else {
                        message.warning("Network error!");
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            message.warning("Maglumatlary Doly girizin!");
        }
    };

    useEffect(() => {
        // getEmployeeStatuses();
        // getStores();
    }, []);

    return (
        <div className="w-full pt-0">
            <h1 className="font-roboto text-black text-[24px] pb-4">
                Ulanyjy maglumat döretmek
            </h1>
            <div className="my-3">
                <TextField
                    className="h-[42px] font-roboto w-full"
                    id="outlined-basic"
                    label="Doly ady"
                    variant="outlined"
                    size="small"
                    value={data.fullName}
                    onChange={(e) =>
                        setData({ ...data, fullName: e.target.value })
                    }
                />
            </div>
            <div className="my-3">
                <TextField
                    className="h-[42px] font-roboto w-full"
                    id="outlined-basic"
                    label="Salgysy"
                    variant="outlined"
                    size="small"
                    type="text"
                    value={data.address}
                    onChange={(e) =>
                        setData({ ...data, address: e.target.value })
                    }
                />
            </div>
            <div className="w-full inline-flex justify-end mt-10">
                <div className="mr-4">
                    <Button
                        onClick={() => props.onClose()}
                        color="error"
                        variant="outlined"
                    >
                        Goýbolsun et
                    </Button>
                </div>
                <div className="mr-0">
                    <Button onClick={() => createStore()} variant="outlined">
                        Döret
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default React.memo(CreateStore);
