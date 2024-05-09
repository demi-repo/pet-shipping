import ReactStars from "react-stars";

const FeedbackCard = (props: any) => {
  const { value = 0, title = "", content = "", auth = "", date = "" } = props;

  return (
    <div className="w-full py-5 px-[10px] flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <div className="w-full h-[1px] bg-[#e3e3e3]"></div>
        <ReactStars value={value} edit={false} />
      </div>
      <div className="flex flex-col gap-[10px]">
        <div className="text-[17px] font-bold">{title}</div>
        <div className="text-sm font-medium">{content}</div>
      </div>
      <div className="flex justify-between font-bold text-xs">
        <div className="flex gap-[10px]">
          <span>{auth}</span>
          <span>Verified Buyer</span>
        </div>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default FeedbackCard;
