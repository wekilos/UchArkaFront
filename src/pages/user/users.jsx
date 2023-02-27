import React, { useEffect, useState } from "react";

import {
    Add,
    FilterAltOutlined,
    Edit,
    Info,
    Delete,
} from "@mui/icons-material";
import "../../css/main.css";
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    TextField,
    Select,
} from "@mui/material";
import { Modal, message } from "antd";
import CreateEmployee from "./createUser";
import { axiosInstance } from "../../utils/axiosIntance";
import { useHistory } from "react-router-dom";

const Stores = () => {
    const history = useHistory();
    const [open, setOpen] = useState(false);
    const [update, setUpdate] = useState(false);
    const [storeData, setStoreData] = useState();
    const [data, setData] = useState([]);
    const [status, setStatus] = useState([]);
    const [filter, setFilter] = useState("");

    const [employee, setEmployee] = useState({
        password: "",
        username: "",
        firstname: "",
        phone: "",
        EmployeeStatusId: 0,
        StoreId: 0,
    });
    const [stores, setStores] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        console.log(filter);
        axiosInstance
            .get("/api/user/all", {
                params: {
                    filter: filter,
                },
            })
            .then((data) => {
                console.log(data.data);
                setData(data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const getFilter = () => {
        getUsers();
    };

    const deleteUser = () => {
        axiosInstance
            .delete("/api/user/destroy/" + employee?.id)
            .then((data) => {
                message.success("Öçürildi!");
                getUsers();
                setUpdate(false);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="w-full bg-background min-h-[100vh] pt-8 pb-8">
            <Modal
                className="font-roboto"
                width={700}
                open={open}
                onCancel={() => setOpen(false)}
                footer={false}
            >
                <div className="bg-white">
                    <CreateEmployee
                        getEmployess={getUsers}
                        onClose={() => setOpen(false)}
                    />
                </div>
            </Modal>
            <Modal
                className="font-roboto"
                width={700}
                open={update}
                onCancel={() => setUpdate(false)}
                footer={false}
            >
                <div className="bg-white">
                    <h1 className="font-roboto text-black text-[24px] pb-4">
                        Ulanyjy maglumatyny üçürmek!
                    </h1>
                    <div className="w-full inline-flex justify-end mt-10">
                        <div className="mr-4">
                            <Button
                                onClick={() => setUpdate(false)}
                                color="error"
                                variant="outlined"
                            >
                                Goýbolsun et
                            </Button>
                        </div>
                        <div className="mr-0">
                            <Button
                                onClick={() => deleteUser()}
                                variant="outlined"
                            >
                                Üçür
                            </Button>
                        </div>
                    </div>
                </div>
            </Modal>

            <div className="w-[95%] mx-auto">
                <div className="w-[100%]  py-4  m-auto inline-flex justify-between">
                    <h5 className="text-[24px] leading-[42px] text-black font-[500] font-roboto whitespace-nowrap">
                        Ulanyjylar
                    </h5>

                    <Button
                        onClick={() => setOpen(true)}
                        startIcon={<Add />}
                        variant="contained"
                        className="h-[42px] !text-[12px] bg-primary-light font-roboto"
                    >
                        Täze goş
                    </Button>
                </div>

                <div className="w-[100%]  bg-white px-4 py-4  m-auto inline-flex justify-between">
                    <div className="inline-flex justify-start">
                        <div className="mr-4">
                            <TextField
                                className="h-[42px] font-roboto"
                                id="outlined-basic"
                                label="  Ulanyjy ady"
                                variant="outlined"
                                size="small"
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                                onKeyPress={(e) => {
                                    if (e.key === "Enter") {
                                        getFilter();
                                    }
                                }}
                            />
                        </div>
                    </div>

                    <Button
                        startIcon={<FilterAltOutlined />}
                        variant="contained"
                        className="h-[42px] !text-[12px] bg-primary-light font-roboto"
                        onClick={() => getFilter()}
                    >
                        Filter
                    </Button>
                </div>
            </div>
            <div className="w-[95%] mt-6 mx-auto bg-white">
                <table className="w-full border-collapse ">
                    <thead>
                        <tr className="border-b-2">
                            {/* <th className="py-4 px-5 w-[30px] font-roboto">
                                Ýagdaýy
                            </th> */}
                            <th className="py-4 px-5 font-roboto">
                                Ulanyjy ady
                            </th>
                            <th className="py-4 px-5 font-roboto">Salgysy</th>
                            <th className="py-4 px-5 font-roboto">Telefon</th>
                            <th className="py-4 px-5 font-roboto">
                                Hereketler
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((item) => {
                            return (
                                <tr className="border-b-2">
                                    <td className="py-4 px-5 font-roboto">
                                        {item?.fullName}
                                    </td>
                                    <td className="py-4 px-5 font-roboto">
                                        {item?.address}
                                    </td>
                                    <td className="py-4 px-5 font-roboto">
                                        {item?.Phones?.map((item) => {
                                            return <p>{item?.phone}</p>;
                                        })}
                                    </td>

                                    <td className="py-4 px-5 font-roboto text-primary-dark cursor-pointer">
                                        <Edit
                                            onClick={() => {
                                                history.push({
                                                    pathname:
                                                        "/create/" + item?.id,
                                                });
                                            }}
                                        />{" "}
                                        <Info
                                            onClick={() => {
                                                history.push({
                                                    pathname:
                                                        "/user/" + item?.id,
                                                });
                                            }}
                                        />
                                        <Delete
                                            className="text-red"
                                            onClick={() => {
                                                setUpdate(true);
                                                setEmployee(item);
                                            }}
                                        />
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default React.memo(Stores);
