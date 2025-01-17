export function ServiceFeatures() {
  return (
    <div className="space-y-12 mb-[20px]">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-xl">当社のサービスは、</h3>
        <p className="text-lg leading-relaxed">
          テキストテキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
      </div>

      {/* 三角形レイアウト */}
      <div className="relative max-w-[500px] h-[500px] mx-auto">
        {/* 上部中央のテキスト */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[200px]">
          <div className="bg-[#22d6dd] rounded-lg p-4 text-center shadow-lg w-[300px] h-[200px] flex items-center justify-center h-full">
            <p className="text-lg font-bold">テキスト</p>
          </div>
        </div>

        {/* 下部左のテキスト */}
        <div className="absolute bottom-0 right-[305px] w-[300px] h-[200px]">
          <div className="bg-[#22d6dd] rounded-lg p-4 text-center shadow-lg w-[300px] h-[200px] flex items-center justify-center h-full">
            <p className="text-lg font-bold">テキスト</p>
          </div>
        </div>

        {/* 下部右のテキスト */}
        <div className="absolute bottom-0 left-[305px] w-[300px] h-[200px]">
          <div className="bg-[#22d6dd] rounded-lg p-4 text-center shadow-lg w-[300px] h-[200px] flex items-center justify-center h-full">
            <p className="text-lg font-bold">テキスト</p>
          </div>
        </div>
      </div>
    </div>
  )
}

