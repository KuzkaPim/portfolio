export const HubnityPreview = () => {
  return (
    <div className="w-full h-full bg-linear-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center relative overflow-hidden">
      <div className="w-[70%] h-[60%] bg-secondary rounded-xl shadow-lg border border-layer/30 flex flex-col p-3 z-10">
        <div className="flex gap-2 mb-3">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>

        <div className="flex gap-3 h-full">
          <div className="w-1/3 h-full bg-layer/20 rounded-lg" />

          <div className="w-2/3 h-full flex flex-col gap-2">
            <div className="w-full h-1/2 bg-layer/20 rounded-lg flex items-end p-2 gap-1 overflow-hidden">
              <div className="w-1/4 bg-accent/40 rounded-t-sm h-[40%]" />
              <div className="w-1/4 bg-accent/60 rounded-t-sm h-[50%]" />
              <div className="w-1/4 bg-accent/80 rounded-t-sm h-[70%]" />
              <div className="w-1/4 bg-accent rounded-t-sm h-[90%]" />
            </div>

            <div className="w-full h-1/2 bg-layer/20 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};
