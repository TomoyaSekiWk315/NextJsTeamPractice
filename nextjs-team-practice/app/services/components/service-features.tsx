export function ServiceFeatures() {
  return (
    <div className="space-y-12">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-xl mb-4">当社のサービスは、</h3>
        <p className="text-lg leading-relaxed">
          テキストテキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
      </div>

      {/* 三角形レイアウト */}
      <div className="relative max-w-[500px] h-[300px] mx-auto">
        {/* 上部中央のテキスト */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px]">
          <div className="bg-[#22d6dd] rounded-lg p-4 text-center shadow-lg">
            <p className="text-lg font-bold">テキスト</p>
          </div>
        </div>

        {/* 下部左のテキスト */}
        <div className="absolute bottom-0 left-0 w-[200px]">
          <div className="bg-[#22d6dd] rounded-lg p-4 text-center shadow-lg">
            <p className="text-lg font-bold">テキスト</p>
          </div>
        </div>

        {/* 下部右のテキスト */}
        <div className="absolute bottom-0 right-0 w-[200px]">
          <div className="bg-[#22d6dd] rounded-lg p-4 text-center shadow-lg">
            <p className="text-lg font-bold">テキスト</p>
          </div>
        </div>
      </div>
    </div>
  )
}

