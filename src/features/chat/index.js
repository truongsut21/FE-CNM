import TitleCard from "../../components/Cards/TitleCard"
function Chat() {

    return (
        <>

            <TitleCard title="Linh Be" topMargin="mt-2">

                <div className="chat chat-start">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS chat bubble component" src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/329912740_6277300982326482_44612447103804705_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGn7Xuzm_s5XyvOBKTaCY5Ut8xa170YehK3zFrXvRh6EjVb3cwW3A46lyOjFpvuXwlrkiopePilgFLSQ7YcxUBP&_nc_ohc=GB-v4dh3cOEAX_CflsR&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfAOvNxJgdIgUSUUve5qgLhFMSDBX69Bw3eJja0AN90r4g&oe=66001926" />
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
                            <img alt="Tailwind CSS chat bubble component" src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t1.6435-9/69831041_125465292117720_1428579072669122560_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGtAp9TwZGNNZxSPXu08EPZXpG-oBJSn7Zekb6gElKftvrf7cRz04JGr3-evuoLGU7X3L6Ds5Hr4-KoXx2pmFAJ&_nc_ohc=7RQ7EQWsISAAX9GuVWY&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfA2eOo8XgZOPzRNFP28OTcqRD8BvHBe75DB9k9LC96miA&oe=6622B1DE" />
                        </div>
                    </div>
                    <div className="chat-header">
                        Đỗ Trường
                        <time className="text-xs opacity-50">02:30</time>
                    </div>
                    <div className="chat-bubble">oke thì merge đi</div>
                    <div className="chat-footer opacity-50">
                        Seen at 12:46
                    </div>
                </div>
            </TitleCard>
        </>
    )
}


export default Chat