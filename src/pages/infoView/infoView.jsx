import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import {
    Add,
    FilterAltOutlined,
    Edit,
    PersonOffOutlined,
    PersonOutlineOutlined,
    Delete,
} from "@mui/icons-material";
import "../../css/main.css";
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import { Modal, message } from "antd";
import CreateInfo from "./createInfo";
import { axiosInstance } from "../../utils/axiosIntance";

const InfoView = () => {
    const [open, setOpen] = useState(false);
    const [update, setUpdate] = useState(false);
    const [deleteD, setDeleteD] = useState(false);
    const [infoData, setInfoData] = useState({});
    const [infos, setInfos] = useState([]);
    const [phone, setPhone] = useState("+993");
    const [data, setData] = useState([]);
    const [user, setUser] = useState({ fullName: "", address: "" });
    const [userData, setUserData] = useState({ fullName: "", address: "" });
    const { id } = useParams();
    useEffect(() => {
        getUser();
        getInfo();
    }, []);

    const getUser = () => {
        axiosInstance
            .get("/api/user/" + id)
            .then((data) => {
                console.log(data.data);
                setUser(data.data);
                setUserData(data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const updateUser = () => {
        if (userData.fullName.length > 0 && userData.address.length > 0) {
            axiosInstance
                .patch("/api/user/update", userData)
                .then((data) => {
                    message.success(data.data);
                    getUser();
                    setOpen(false);
                })
                .catch((err) => {
                    console.log(err);
                    message.warning("Network error!");
                });
        } else {
            message.warning("Maglumatlary doly girizin!");
        }
    };

    const getInfo = () => {
        axiosInstance
            .get("/api/info/all", {
                params: {
                    UserId: id,
                },
            })
            .then((data) => {
                console.log(data.data);
                setInfos(data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const deleteInfo = () => {
        axiosInstance
            .delete("/api/info/destroy/" + infoData?.id)
            .then((data) => {
                console.log(data.data);
                message.success("??????rildi!");
                getInfo();
                setDeleteD(false);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const updateInfo = () => {
        axiosInstance
            .patch("/api/info/update", infoData)
            .then((data) => {
                console.log(data.data);
                message.success("????tgedildi!");
                getInfo();
                setUpdate(false);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const addPhone = () => {
        axiosInstance
            .post("/api/phone/create", {
                phone,
                UserId: id,
            })
            .then((data) => {
                message.success("D??redildi!");
                getUser();
                setPhone("+993");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const deletePhone = (id) => {
        axiosInstance
            .delete("/api/phone/destroy/" + id)
            .then((data) => {
                console.log(data.data);
                message.success("??????rildi!");
                getUser();
                setPhone("+993");
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
                    <h1 className="font-roboto text-black text-[24px] pb-4">
                        Ulanyjy maglumat ????tgetmek
                    </h1>
                    <div className="my-3">
                        <TextField
                            className="h-[42px] font-roboto w-full"
                            id="outlined-basic"
                            label="Doly ady"
                            variant="outlined"
                            size="small"
                            value={userData.fullName}
                            onChange={(e) =>
                                setUserData({
                                    ...userData,
                                    fullName: e.target.value,
                                })
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
                            value={userData.address}
                            onChange={(e) =>
                                setUserData({
                                    ...userData,
                                    address: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="my-3 inline-flex justify-between w-full">
                        <TextField
                            className="h-[42px] font-roboto w-[80%]"
                            id="outlined-basic"
                            label="Salgysy"
                            variant="outlined"
                            size="small"
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <div className="mr-0">
                            <Button
                                onClick={() => addPhone()}
                                variant="contained"
                            >
                                <Add />
                                D??ret
                            </Button>
                        </div>
                    </div>
                    <div className="w-full my-3">
                        {user?.Phones?.map((item) => {
                            return (
                                <div className="w-[55%] inline-flex justify-between">
                                    <h1 className="text-[24px] font-roboto">
                                        {item?.phone}
                                    </h1>

                                    <Delete
                                        onClick={() => deletePhone(item?.id)}
                                        className="text-red cursor-pointer mt-1"
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <div className="w-full inline-flex justify-end mt-10">
                        <div className="mr-4">
                            <Button
                                onClick={() => setOpen(false)}
                                color="error"
                                variant="outlined"
                            >
                                Go??bolsun et
                            </Button>
                        </div>
                        <div className="mr-0">
                            <Button
                                onClick={() => updateUser()}
                                variant="outlined"
                            >
                                ????tget
                            </Button>
                        </div>
                    </div>
                </div>
            </Modal>
            <Modal
                className="font-roboto"
                width={800}
                open={update}
                onCancel={() => setUpdate(false)}
                footer={false}
            >
                <div className="w-full pt-0">
                    <h1 className="font-roboto text-black text-[24px] pb-4">
                        Ulanyjy maglumat ????tgetmek
                    </h1>
                    <div className="inline-flex justify-between flex-wrap">
                        <div className="mr-4 mb-2 w-[40%]">
                            <TextField
                                className="w-full h-[42px] font-roboto"
                                id="outlined-basic"
                                label="Famili??asy, ady, atasyny?? ady"
                                variant="outlined"
                                size="small"
                                value={infoData?.fullName}
                                onChange={(e) =>
                                    setInfoData({
                                        ...infoData,
                                        fullName: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="mr-4 mb-2 w-[40%]">
                            <TextField
                                className="w-full h-[42px] font-roboto"
                                id="outlined-basic"
                                label="Garynda??-lyk derejesi"
                                variant="outlined"
                                size="small"
                                value={infoData?.relation}
                                onChange={(e) =>
                                    setInfoData({
                                        ...infoData,
                                        relation: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="mr-4 mb-2 w-[40%]">
                            <TextField
                                className="w-full h-[42px] font-roboto"
                                id="outlined-basic"
                                label="Doglan ??yly"
                                variant="outlined"
                                size="small"
                                type="number"
                                value={infoData?.year}
                                onChange={(e) =>
                                    setInfoData({
                                        ...infoData,
                                        year: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="mr-4 mb-2 w-[40%]">
                            <TextField
                                className="w-full h-[42px] font-roboto"
                                id="outlined-basic"
                                label="Doglan ??eri"
                                variant="outlined"
                                size="small"
                                value={infoData?.birthPlace}
                                onChange={(e) =>
                                    setInfoData({
                                        ...infoData,
                                        birthPlace: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="mr-4 mb-2 w-[40%]">
                            <TextField
                                className="w-full h-[42px] font-roboto"
                                id="outlined-basic"
                                label="I??le????n ??eri we wezipesi"
                                variant="outlined"
                                size="small"
                                value={infoData?.job}
                                onChange={(e) =>
                                    setInfoData({
                                        ...infoData,
                                        job: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="mr-4 mb-2 w-[40%]">
                            <TextField
                                className="w-full h-[42px] font-roboto"
                                id="outlined-basic"
                                label="??a??a??an ??eri we ???? salgysy"
                                variant="outlined"
                                size="small"
                                value={infoData?.address}
                                onChange={(e) =>
                                    setInfoData({
                                        ...infoData,
                                        address: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="mr-4 mb-2 w-[50%] inline-flex justify-between cursor-pointer">
                            <label
                                htmlFor="isJail"
                                className="font-roboto select-none cursor-pointer w-full"
                            >
                                Kazy??et jogapk??r- ??iligine ??ekildimi ?
                            </label>
                            <input
                                className="w-full h-[32px] font-roboto cursor-pointer"
                                id="isJail"
                                label="D??kany?? ady"
                                variant="outlined"
                                size="small"
                                type="checkbox"
                                value={infoData?.jail}
                                checked={infoData?.jail}
                                onChange={(e) =>
                                    setInfoData({
                                        ...infoData,
                                        jail: !infoData.jail,
                                    })
                                }
                            />
                        </div>

                        <div className="mr-4 mb-2 w-[40%]">
                            <Button
                                onClick={() => updateInfo()}
                                startIcon={<Edit />}
                                variant="contained"
                                className="h-[42px] w-full !text-[12px] bg-primary-light font-roboto"
                            >
                                ????tget
                            </Button>
                        </div>
                    </div>
                </div>
            </Modal>
            <Modal
                className="font-roboto"
                width={700}
                open={deleteD}
                onCancel={() => setDeleteD(false)}
                footer={false}
            >
                <div className="bg-white">
                    <h1 className="font-roboto text-black text-[24px] pb-4">
                        Ulanyjyny?? maglumatyny ??????rmek!
                    </h1>
                    <div className="w-full inline-flex justify-end mt-10">
                        <div className="mr-4">
                            <Button
                                onClick={() => setDeleteD(false)}
                                color="error"
                                variant="outlined"
                            >
                                Go??bolsun et
                            </Button>
                        </div>
                        <div className="mr-0">
                            <Button
                                onClick={() => deleteInfo()}
                                variant="outlined"
                            >
                                ??????r
                            </Button>
                        </div>
                    </div>
                </div>
            </Modal>
            <div className="w-[95%] mx-auto">
                <div className="w-[100%]   m-auto  ">
                    <h5 className="text-[24px]  leading-[42px] text-black font-[500] font-roboto whitespace-nowrap">
                        {user.fullName}
                    </h5>
                    <p className="text-[18px]  leading-[32px] text-black font-[400] font-roboto whitespace-nowrap">
                        ???? arkasy, ma??gala agzalary, ??z??ni?? hem-de
                        a??alyny??(adamsyny??) ??akyn dogan???garynda??lary barada
                        <br />
                        <b> maglumat</b>
                    </p>
                </div>
            </div>
            <div className="w-[95%] mt-6 mx-auto bg-white">
                <table className="w-full border-collapse ">
                    <thead>
                        <tr className="border-b-2">
                            <th className="py-4 px-5 font-roboto">
                                Famili??asy, ady, atasyny?? ady
                            </th>
                            <th className="py-4 px-5 font-roboto">
                                Garynda??-lyk derejesi
                            </th>
                            <th className="py-4 px-5 font-roboto">
                                Doglan ??yly
                            </th>
                            <th className="py-4 px-5 font-roboto">
                                Doglan ??eri
                            </th>
                            <th className="py-4 px-5 font-roboto">
                                I??le????n ??eri we wezipesi
                            </th>
                            <th className="py-4 px-5 font-roboto">
                                ??a??a??an ??eri we ???? salgysy
                            </th>
                            <th className="py-4 px-5 font-roboto">
                                Kazy??et jogapk??r- ??iligine ??ekildimi ?
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {infos?.map((item) => {
                            return (
                                <tr
                                    key={item.id + "store"}
                                    className="border-b-2"
                                >
                                    <td className="py-4 px-5 font-roboto">
                                        {item?.fullName}
                                    </td>
                                    <td className="py-4 px-5 font-roboto">
                                        {item?.relation}
                                    </td>
                                    <td className="py-4 px-5 font-roboto">
                                        {item?.year}
                                    </td>
                                    <td className="py-4 px-5 font-roboto">
                                        {item?.birthPlace}
                                    </td>
                                    <td className="py-4 px-5 font-roboto">
                                        {item?.job}
                                    </td>
                                    <td className="py-4 px-5 font-roboto">
                                        {item?.address}
                                    </td>
                                    <td className="py-4 px-5 font-roboto">
                                        {item?.jail ? "Hawa" : "??ok"}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div className="w-full mt-4 px-8">
                    <div className="w-full inline-flex justify-start">
                        <h1 className="font-roboto font-bold">
                            ???? salgysy we telefony:
                        </h1>
                        <h1 className="font-roboto ml-4">{user?.address}</h1>
                    </div>
                    <div className="w-full inline-flex justify-start">
                        <h1 className="font-roboto font-bold">Tel: </h1>
                        {user?.Phones?.map((item) => {
                            return (
                                <h1 className="font-roboto font-bold ml-4">
                                    {item?.phone},
                                </h1>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoView;
