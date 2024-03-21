import TitleCard from "../../components/Cards/TitleCard";
import {
  PaperAirplaneIcon,
  ChatBubbleBottomCenterTextIcon,
  MagnifyingGlassIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import AvataUser from "./components/phonebook/AvataUser";

function Chat() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-1">
        <TitleCard title="Danh bạ" topMargin="mt-2">
          <div className="h-[37rem]">
            <form className="">
              <label
                for="search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <input
                  type="search"
                  id="search"
                  className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Tìm kiếm danh bạ..."
                  required
                />

                <button
                  type="submit"
                  className="flex items-center text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-4 py-2 "
                >
                  Tìm <MagnifyingGlassIcon className="w-5" />
                </button>
              </div>
            </form>

            <button className="btn btn-block btn-primary btn-sm mt-2">
              {" "}
              <UserPlusIcon className="w-4" /> Thêm mới danh bạ
            </button>

            <div className="">
              <AvataUser
                name="Nhật Nam"
                mess="chắc t đi ẻ phát"
                avata="https://bedental.vn/wp-content/uploads/2022/11/1e8063154fdf3dcbb07edf0ad2df326a.jpg"
              />

              <AvataUser
                active="true"
                name="Linh Be"
                mess="Oke fen luôn"
                avata="https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-1/329912740_6277300982326482_44612447103804705_n.jpg?stp=dst-jpg_p160x160&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGn7Xuzm_s5XyvOBKTaCY5Ut8xa170YehK3zFrXvRh6EjVb3cwW3A46lyOjFpvuXwlrkiopePilgFLSQ7YcxUBP&_nc_ohc=GB-v4dh3cOEAX9elRyk&_nc_ht=scontent.fhan3-1.fna&oh=00_AfCU2KlE8roZ9JTAox5vb-7htxNAnvUsPYl25TuLNX6HAQ&oe=6600B0C8"
              />
              <AvataUser
                name="Chị Backend"
                mess="Cứu tao!!!"
                avata="https://scontent.fhan3-3.fna.fbcdn.net/v/t1.6435-9/71391375_128093541854895_1672459410363908096_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGlKpfdbCgBtcPuJgnt99xTvuM7b4aZ9hO-4ztvhpn2E-8DccjAkj3Mbb7bEzk4cjo0XSySzfOCpfZ1W0UIqpm9&_nc_ohc=lTCevjn2YUwAX_cl7gY&_nc_ht=scontent.fhan3-3.fna&oh=00_AfAOunMAhYeGqmWdu7gjKHVqzc5UItAUzYN3Su_Bz8pY9w&oe=66234BEB"
              />
              <AvataUser
                name="Nhật Nam"
                mess="chắc t đi ẻ phát"
                avata="https://scontent.fhan3-3.fna.fbcdn.net/v/t1.6435-9/71391375_128093541854895_1672459410363908096_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGlKpfdbCgBtcPuJgnt99xTvuM7b4aZ9hO-4ztvhpn2E-8DccjAkj3Mbb7bEzk4cjo0XSySzfOCpfZ1W0UIqpm9&_nc_ohc=lTCevjn2YUwAX_cl7gY&_nc_ht=scontent.fhan3-3.fna&oh=00_AfAOunMAhYeGqmWdu7gjKHVqzc5UItAUzYN3Su_Bz8pY9w&oe=66234BEB"
              />
            </div>
          </div>
        </TitleCard>
      </div>

      <div className="col-span-3">
        <TitleCard title="Linh Be" topMargin="mt-2">
          <div className="h-[37rem] flex flex-col-reverse">
            <form className="sticky top-0 mt-4">
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
            <div className=" overflow-y-auto">
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
            </div>
          </div>
        </TitleCard>
      </div>
    </div>
  );
}

export default Chat;
