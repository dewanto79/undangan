import ChatBox from "@/components/Organisms/ChatBox";
import { AddMessage } from "@/database/add-message-dto";
import { addMessage, getAllMessages } from "@/database/firebase";
import { Message } from "@/database/message.dto";
import { motion } from "framer-motion";
import { Send, Send2 } from "iconsax-react";
import moment from "moment";
import Image from "next/image";
import {
  LegacyRef,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";

function getColorFromImage(image: any) {
  const color: { [key: string]: string } = {
    "1.png": "rgb(195, 120, 146)",
    "2.png": "rgb(192 132 252)",
    "3.png": "rgb(74, 222, 128)",
    "4.png": "rgb(248, 113, 113)",
    "5.png": "rgb(251, 146, 60)",
    "6.png": "rgb(251, 191, 36)",
    "7.png": "rgb(250, 204, 21)",
    "8.png": "rgb(236, 72, 153)",
    "9.png": "rgb(130, 99, 90)",
    "10.png": "rgb(100, 116, 139)",
    "11.png": "rgb(5, 150, 105)",
    "12.png": "rgb(94, 234, 212)",
    "13.png": "rgb(14, 116, 144)",
    "14.png": "rgb(2, 132, 199)",
    "15.png": "rgb(163, 230, 53)",
    "16.png": "rgb(159, 18, 57)",
  };
  return color[image] || color["1.png"];
}

interface managedDataProps {
  date: string;
  data: Message[];
}

export default function UcapanDanDoa() {
  const [isChatBox, setIsChatBox] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>();
  const [groupCount, setGroupCount] = useState<number>();
  const [managedData, setManagedData] = useState<managedDataProps[]>();

  const messagesEndRef = useRef<HTMLDivElement>();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollBy({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getMessage = async () => {
    let allMessage = await getAllMessages();
    manageData(allMessage.data);
    setMessages(allMessage.data);
    setGroupCount(allMessage.count);
  };

  const handleSubmit = async (payload: AddMessage) => {
    setIsChatBox(false);
    await addMessage(payload).then(() => {
      getMessage();
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    });
  };

  const manageData = (data: Message[]) => {
    const groups: { [key: string]: Message[] } = data?.reduce(
      (groups: any, game: Message) => {
        const date: string = moment(game.updatedAt).format("YYYY-MM-DD");
        if (!groups[date as keyof typeof groups]) {
          groups[date as keyof typeof groups] = [];
        }
        groups[date].push(game);
        return groups;
      },
      {}
    );

    // Edit: to add it in the array format instead
    const groupArrays = Object?.keys(groups)
      .map((date) => {
        return {
          date,
          data: groups[date as keyof typeof groups],
        };
      })
      .sort((a, b) => {
        let da = new Date(a.date);
        let db = new Date(b.date);
        return da.getTime() - db.getTime();
      });

    setManagedData(groupArrays);
  };

  useEffect(() => {
    getMessage();
  }, []);
  useEffect(() => {
    getMessage();
  }, [addMessage]);

  return (
    <div className={`px-3 h-[680px]`}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        // viewport={{ margin: "-200px" }}
        className={`text-4xl mb-8 text-center font-lobster`}
      >
        Ucapan & Doa
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ margin: "-200px" }}
      >
        <div className={`rounded-lg`}>
          {/* Header */}
          <div
            className={`bg-slate-900 flex items-center justify-start px-4 py-3 rounded-t-2xl gap-2`}
          >
            <div>
              <Image
                className={`rounded-full bg-white w-10 h-10`}
                alt=""
                src={`/image/UcapanDanDoaImage.png`}
                width={300}
                height={300}
              />
            </div>
            <div className={`text-white`}>
              <div className={`font-bold font-inter`}>Grup Ucapan dan Doa</div>
              <div className={`text-xs`}>{groupCount} Anggota</div>
            </div>
          </div>

          {/* Body */}
          <div
            className={`flex flex-col h-96 items-start justify-start bg-slate-200 overflow-y-scroll py-2`}
          >
            {managedData?.map((rows, index) => (
              <div key={index} className={`flex flex-col w-full`}>
                <div
                  className={`w-fit mx-auto my-2 text-xs bg-white opacity-60 rounded-lg px-3 py-1`}
                >
                  {rows.date ===
                  moment(new Date().toISOString()).format("YYYY-MM-DD")
                    ? "Today"
                    : rows.date ===
                      moment(
                        new Date().setDate(new Date().getDate() - 1)
                      ).format("YYYY-MM-DD")
                    ? "Yesterday"
                    : moment(rows.date).format("D MMMM YYYY")}
                </div>
                <div>
                  {rows.data?.map((rows2, index) => (
                    <div
                      key={index}
                      className={`flex items-start justify-start px-4 py-1 gap-2 `}
                    >
                      <Image
                        className={`w-10 h-10  rounded-[100%] bg-white object-contain ${
                          rows2.name === rows.data[index - 1]?.name &&
                          "invisible"
                        }`}
                        alt={``}
                        src={`/image/Avatar/${rows2?.imageId ?? "1.png"}`}
                        width={40}
                        height={40}
                        objectFit={"contain"}
                      />

                      {/* chatbox */}
                      <div className={`flex items-end gap-2`}>
                        <div
                          ref={messagesEndRef as any}
                          className={`bg-green-50 px-3 pt-2 pb-3 rounded-lg rounded-tl-none flex-1`}
                        >
                          <div className={`flex justify-between gap-4`}>
                            {/* Nama */}
                            <div
                              style={{
                                color: getColorFromImage(rows2?.imageId),
                              }}
                              className={`font-inter font-bold text-xs`}
                            >
                              {rows2.name}
                            </div>
                            {/* Hadir tidak */}
                            <div
                              className={`font-inter text-xs text-slate-300`}
                            >
                              {rows2?.isAttending ? "~hadir" : "~tidak hadir"}
                            </div>
                          </div>
                          {/* Pesan */}
                          <div className={`font-inter text-xs mt-2`}>
                            {rows2?.message}
                          </div>
                        </div>
                        <div
                          className={`font-inter text-[10px] text-slate-400`}
                        >
                          {moment(rows2?.createdAt).format("HH:mm")}
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* Profile Picture */}
                </div>
              </div>
            ))}
          </div>

          {/* chat  */}
          <div
            className={`flex items-center justify-between bg-slate-600 px-4 py-2 gap-3 rounded-bl-2xl rounded-br-2xl`}
          >
            <div
              className={`bg-stone-200 px-2 py-2 rounded-lg text-xs w-full italic text-[#7B7B7B]`}
              onClick={() => {
                setIsChatBox(true);
              }}
            >
              Tuliskan ucapan atau kata
            </div>
            <Send
              variant={`Bold`}
              className={`bg-stone-200 text-slate-600 rounded-[100%]  w-8 h-8`}
            />
          </div>
        </div>
        <ChatBox
          onClose={() => {
            setIsChatBox(false);
          }}
          isOpen={isChatBox}
          onSubmit={handleSubmit}
        />
      </motion.div>
    </div>
  );
}
