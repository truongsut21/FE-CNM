import TitleCard from "../../components/Cards/TitleCard";
import { PaperAirplaneIcon, ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/solid";

function Chat() {
    return (
        <>
            <TitleCard title="Linh Be" topMargin="mt-2">
                <div className="h-[35rem]">

                    <div className="chat chat-start">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS chat bubble component"
                                    src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/329912740_6277300982326482_44612447103804705_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGn7Xuzm_s5XyvOBKTaCY5Ut8xa170YehK3zFrXvRh6EjVb3cwW3A46lyOjFpvuXwlrkiopePilgFLSQ7YcxUBP&_nc_ohc=GB-v4dh3cOEAX_CflsR&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfAOvNxJgdIgUSUUve5qgLhFMSDBX69Bw3eJja0AN90r4g&oe=66001926"
                                />
                            </div>
                        </div>
                        <div className="chat-header">
                            Linh Be
                            <time className="text-xs opacity-50">02:29</time>
                        </div>
                        <div className="chat-bubble">cần merge vào main kh\</div>
                    </div>

                    <div className="chat chat-end">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS chat bubble component"
                                    src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t1.6435-9/69831041_125465292117720_1428579072669122560_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGtAp9TwZGNNZxSPXu08EPZXpG-oBJSn7Zekb6gElKftvrf7cRz04JGr3-evuoLGU7X3L6Ds5Hr4-KoXx2pmFAJ&_nc_ohc=7RQ7EQWsISAAX9GuVWY&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfA2eOo8XgZOPzRNFP28OTcqRD8BvHBe75DB9k9LC96miA&oe=6622B1DE"
                                />
                            </div>
                        </div>
                        <div className="chat-header">
                            Đỗ Trường
                            <time className="text-xs opacity-50">02:30</time>
                        </div>
                        <div className="chat-bubble">oke thì merge đi</div>
                        <div className="chat-footer opacity-50">Seen at 12:46</div>
                    </div>

                    <form className="sticky top-0">
                        <label
                            for="search"
                            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                        >
                            Search
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <ChatBubbleBottomCenterTextIcon className="w-5 text-primary" />
                            </div>
                            <input
                                type="search"
                                id="search"
                                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Nhập tin nhắn..."
                                required
                            />
                            <button
                                type="submit"
                                className="flex items-center text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-4 py-2 "
                            >
                                Gửi <PaperAirplaneIcon className="w-5" />
                            </button>
                        </div>
                    </form>
                </div>
            </TitleCard>
        </>
    );
}

export default Chat;
