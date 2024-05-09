import ChatBox from "@/components/Organisms/ChatBox";
import { AddMessage } from "@/database/add-message-dto";
import { addMessage, getAllMessages } from "@/database/firebase";
import { Message } from "@/database/message.dto";
import { Send, Send2 } from "iconsax-react";
import Image from "next/image";
import {
  LegacyRef,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";

export default function UcapanDanDoa() {
  const [isChatBox, setIsChatBox] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>();

  const messagesEndRef = useRef<HTMLDivElement>();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollBy({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getMessage = async () => {
    let allMessage = await getAllMessages();
    setMessages(allMessage);
  };

  const handleSubmit = async (payload: AddMessage) => {
    await addMessage(payload).then(() => {
      getMessage();
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    });
    setIsChatBox(false);
  };

  useEffect(() => {
    getMessage();
  }, []);
  useEffect(() => {
    getMessage();
  }, [addMessage]);

  return (
    <div className={`px-3 h-[680px]`}>
      <div className={`rounded-lg`}>
        {/* Header */}
        <div
          className={`bg-slate-900 flex items-center justify-start px-4 py-3 rounded-t-2xl gap-2`}
        >
          <div>
            <Image
              className={`rounded-full bg-white w-10 h-10`}
              alt=""
              src={`/images/UcapanDanDoaImage.png`}
              width={300}
              height={300}
            />
          </div>
          <div className={`text-white`}>
            <div className={`font-bold font-inter`}>Grup Ucapan dan Doa</div>
            <div className={`text-xs`}>Anggota</div>
          </div>
        </div>

        {/* Body */}
        <div
          className={`flex flex-col h-96 items-start justify-start bg-slate-200 overflow-scroll`}
        >
          {messages?.map((rows, index) => (
            <div
              key={index}
              className={`flex  items-start justify-start px-4 py-3  gap-2 `}
            >
              {/* Profile Picture */}
              <div>
                <Image
                  className={`w-10 h-10  rounded-[100%] bg-white object-contain`}
                  alt={``}
                  src={`/images/Avatar/${rows.imageId}`}
                  width={40}
                  height={40}
                  objectFit={"contain"}
                />
              </div>
              {/* chatbox */}
              <div className={`flex items-end `}>
                <div
                  ref={messagesEndRef as any}
                  className={`bg-green-50 px-4 pt-2 pb-5 rounded-lg rounded-tl-none max-w-60`}
                >
                  {/* Nama */}
                  <div
                    className={`font-inter font-bold text-[#3AA12A] text-xs`}
                  >
                    {rows.name}
                  </div>
                  {/* Pesan */}
                  <div className={`font-inter text-xs mt-2`}>
                    {rows.message}
                  </div>
                </div>
                {/* <div>{rows.createdAt}</div> */}
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
        <ChatBox
          onClose={() => {
            setIsChatBox(false);
          }}
          isOpen={isChatBox}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
