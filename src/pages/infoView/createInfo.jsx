import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
    Add,
    FilterAltOutlined,
    Edit,
    PersonOffOutlined,
    PersonOutlineOutlined,
} from "@mui/icons-material";
import { TextField, Button } from "@mui/material";
import { axiosInstance } from "../../utils/axiosIntance";
import { message } from "antd";
import { useParams } from "react-router-dom";

const CreateInfo = (props) => {
    const { id } = useParams();
    const [data, setData] = useState({
        fullName: "",
        relation: "",
        year: "",
        birthPlace: "",
        job: "",
        address: "",
        jail: false,
        UserId: id,
    });

    const createInfo = () => {
        console.log(data);
        if (
            data.fullName.length > 0 &&
            data.address.length > 0 &&
            data.year.length > 0 &&
            data.birthPlace.length > 0 &&
            data.job.length > 0 &&
            data.relation.length > 0
        ) {
            axiosInstance
                .post("/api/info/create", data)
                .then((data) => {
                    console.log(data.data);

                    message.success("Success!");
                    props.getInfo();
                    setData({
                        fullName: "",
                        relation: "",
                        year: "",
                        birthPlace: "",
                        job: "",
                        address: "",
                        jail: false,
                        UserId: id,
                    });
                })
                .catch((err) => {
                    console.log(err);
                    message.warning("Network error!");
                });
        } else {
            message.warning("Maglumatlary doly girizin!");
        }
    };
    return (
        <div className="w-full pt-0">
            <div className="inline-flex justify-between flex-wrap">
                <div className="mr-4 mb-2 w-[30%]">
                    <TextField
                        className="w-full h-[42px] font-roboto"
                        id="outlined-basic"
                        label="Famili??asy, ady, atasyny?? ady"
                        variant="outlined"
                        size="small"
                        value={data?.fullName}
                        onChange={(e) =>
                            setData({ ...data, fullName: e.target.value })
                        }
                    />
                </div>
                <div className="mr-4 mb-2 w-[30%]">
                    <TextField
                        className="w-full h-[42px] font-roboto"
                        id="outlined-basic"
                        label="Garynda??-lyk derejesi"
                        variant="outlined"
                        size="small"
                        value={data?.relation}
                        onChange={(e) =>
                            setData({ ...data, relation: e.target.value })
                        }
                    />
                </div>
                <div className="mr-4 mb-2 w-[30%]">
                    <TextField
                        className="w-full h-[42px] font-roboto"
                        id="outlined-basic"
                        label="Doglan ??yly"
                        variant="outlined"
                        size="small"
                        type="number"
                        value={data?.year}
                        onChange={(e) =>
                            setData({ ...data, year: e.target.value })
                        }
                    />
                </div>
                <div className="mr-4 mb-2 w-[30%]">
                    <TextField
                        className="w-full h-[42px] font-roboto"
                        id="outlined-basic"
                        label="Doglan ??eri"
                        variant="outlined"
                        size="small"
                        value={data?.birthPlace}
                        onChange={(e) =>
                            setData({ ...data, birthPlace: e.target.value })
                        }
                    />
                </div>
                <div className="mr-4 mb-2 w-[30%]">
                    <TextField
                        className="w-full h-[42px] font-roboto"
                        id="outlined-basic"
                        label="I??le????n ??eri we wezipesi"
                        variant="outlined"
                        size="small"
                        value={data?.job}
                        onChange={(e) =>
                            setData({ ...data, job: e.target.value })
                        }
                    />
                </div>
                <div className="mr-4 mb-2 w-[30%]">
                    <TextField
                        className="w-full h-[42px] font-roboto"
                        id="outlined-basic"
                        label="??a??a??an ??eri we ???? salgysy"
                        variant="outlined"
                        size="small"
                        value={data?.address}
                        onChange={(e) =>
                            setData({ ...data, address: e.target.value })
                        }
                    />
                </div>
                <div className="mr-4 mb-2 w-[38%] inline-flex justify-between cursor-pointer">
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
                        value={data?.jail}
                        checked={data?.jail}
                        onChange={(e) => setData({ ...data, jail: !data.jail })}
                    />
                </div>

                <div className="mr-4 mb-2 w-[30%]">
                    <Button
                        onClick={() => createInfo()}
                        startIcon={<Add />}
                        variant="contained"
                        className="h-[42px] w-full !text-[12px] bg-primary-light font-roboto"
                    >
                        D??ret
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default React.memo(CreateInfo);
