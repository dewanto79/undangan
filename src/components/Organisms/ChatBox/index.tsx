import { AddMessage } from "@/database/add-message-dto";
import Image from "next/image";
import { useState } from "react";

interface ChatBoxProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (_args: AddMessage) => void;
}
export default function ChatBox({ isOpen, onClose, onSubmit }: ChatBoxProps) {
  const [error, setError] = useState<boolean | undefined>();
  const [selectedAvatar, setSelectedAvatar] =
    useState<string>(`/images/Avatar/1.png`);
  const [payload, setPayload] = useState<AddMessage>({
    message: "",
    name: "jerrie",
    isAttending: false,
    imageId: "1.png",
  });

  const handleChange = (key: keyof AddMessage, value: string) => {
    let payloadTemp: any = { ...payload };
    payloadTemp[key] = value;
    setPayload(payloadTemp);
  };

  const onHandleSubmit = () => {
    if (payload.name === "" || payload.message === "") {
      setError(true);
    } else {
      onSubmit(payload);
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center px-1 z-50 ${
        !isOpen && "invisible"
      }`}
      onClick={onClose}
    >
      <div
        className={`bg-[#475569] px-5 py-4 rounded-lg absolute  inset-x-0`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {/* row 1 */}
        <div className={`flex gap-2`}>
          <div
            className={`bg-stone-200 w-[30%] p-1 rounded-lg flex flex-col justify-center items-center`}
          >
            <div>
              <Image
                className={`w-16 h-16  rounded-[100%] bg-white object-contain`}
                alt=""
                objectFit={"contain"}
                src={selectedAvatar}
                width={100}
                height={136}
              />
            </div>
            <div className={`text-xs`}>Ganti Foto</div>
          </div>
          <div className={`bg-stone-200 w-[70%] p-2 rounded-lg`}>
            <div
              className={`my-auto flex flex-col items-center justify-center h-full`}
            >
              <div className={`text-xs`}>Konfirmasi Kehadiran</div>
              <div className={`flex gap-2 items-center text-xs mt-4 `}>
                <div
                  className={`rounded-full  px-2 py-1 ${
                    payload.isAttending
                      ? "bg-[#475569] text-white"
                      : "bg-white text-black"
                  } transition-all duration-100`}
                  onClick={() =>
                    setPayload((prev) => ({ ...prev, isAttending: true }))
                  }
                >
                  Hadir
                </div>
                <div
                  className={`rounded-full  px-2 py-1 ${
                    !payload.isAttending
                      ? "bg-[#475569] text-white"
                      : "bg-white text-black"
                  } transition-all duration-100`}
                  onClick={() =>
                    setPayload((prev) => ({ ...prev, isAttending: false }))
                  }
                >
                  Tidak Hadir
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* row 2 */}
        <div className={`h-[200px]  text-xs mt-2`}>
          <div
            className={`px-3 py-2 flex gap-2 items-center  bg-stone-200 rounded-tl-lg rounded-tr-lg `}
          >
            <span className={`text-[#7B7B7B]`}>Nama:</span>{" "}
            <input
              value={payload.name}
              name={"name"}
              className={`bg-transparent w-full ${
                error && payload.name === "" && "border-2 border-red-400"
              } rounded-sm focus:outline-none`}
              defaultValue={`Jerrie`}
              onChange={(e) => {
                handleChange(e.target.name as keyof AddMessage, e.target.value);
              }}
            />
          </div>
          <div className={`px-2 bg-stone-200 border border-t-4`}>
            <textarea
              value={payload.message}
              name="message"
              onChange={(e) => {
                handleChange(e.target.name as keyof AddMessage, e.target.value);
              }}
              className={`placeholder:italic bg-transparent w-full h-[150px] italic ${
                error && payload.message === "" && "border-2 border-red-400"
              } rounded-lg focus:outline-none`}
              placeholder={`Tuliskan ucapan atau kata`}
            />
          </div>
        </div>

        <button
          type="submit"
          onClick={onHandleSubmit}
          className={`w-full bg-stone-200 rounded-full py-1 text-xs active:bg-sky-950 active:text-white transition-all duration-100`}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
