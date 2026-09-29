export const InviteKzPreview = () => {
  return (
    <div className="w-full h-full bg-linear-to-tr from-pink-500/20 to-orange-400/20 flex items-center justify-center relative overflow-hidden">
      <div className="w-[60%] h-[70%] bg-secondary rounded-2xl shadow-xl border border-layer/30 flex items-center justify-center z-10 relative overflow-hidden">
        <div className="absolute top-0 w-full h-8 bg-layer/20 flex justify-center items-center">
          <div className="w-12 h-2 rounded-full bg-layer/40" />
        </div>

        <div className="text-6xl">✉️</div>
      </div>
    </div>
  );
};
