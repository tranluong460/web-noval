'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/atoms/Button';
import mockData from '@/data/mock.json';
import { 
  ChevronLeft, 
  ChevronRight, 
  Menu, 
  Settings, 
  MessageCircle,
  Bookmark,
  Share2,
  Moon,
  Sun,
  Volume2,
  VolumeX,
  Play,
  Pause
} from 'lucide-react';

interface ChapterPageProps {
  params: {
    id: string;
    cid: string;
  };
}

export default function ChapterPage({ params }: ChapterPageProps) {
  const [fontSize, setFontSize] = useState(16);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showTOC, setShowTOC] = useState(false);
  const [isAutoScroll, setIsAutoScroll] = useState(false);
  const [isTTSPlaying, setIsTTSPlaying] = useState(false);

  const { stories, chapters } = mockData;
  const story = stories.find(s => s.id === parseInt(params.id));
  const chapter = chapters.find(c => c.id === parseInt(params.cid));
  const storyChapters = chapters.filter(c => c.storyId === parseInt(params.id));
  
  const currentIndex = storyChapters.findIndex(c => c.id === parseInt(params.cid));
  const prevChapter = currentIndex > 0 ? storyChapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < storyChapters.length - 1 ? storyChapters[currentIndex + 1] : null;

  if (!story || !chapter) {
    return <div>Chapter not found</div>;
  }

  const mockContent = `
    ${chapter.content}
    
    Li Wei nhìn lên bầu trời đêm đầy sao, cảm nhận được luồng khí linh động trong không khí. Đây chính là đêm mà số phận của cậu sẽ thay đổi mãi mãi.

    "Ngươi có muốn trở thành tu tiên giả không?" Giọng nói của lão già bí ẩn vang lên từ phía sau.

    Li Wei quay lại, nhìn thấy một người đàn ông già với bộ râu dài trắng như tuyết, đôi mắt sáng như những vì sao. Cậu cảm nhận được một sức mạnh khủng khiếp từ người này.

    "Tu tiên giả là gì?" Li Wei hỏi với giọng run rẩy.

    "Đó là con đường dẫn đến bất tử, con đường để trở thành thần tiên. Nhưng con đường này đầy gian khổ và nguy hiểm. Ngươi có sẵn sàng không?"

    Li Wei nghĩ về cuộc sống nhàm chán của mình trong làng, về những ước mơ chưa bao giờ được thực hiện. Cậu gật đầu quyết tâm.

    "Ta sẵn sàng!"

    Lão già mỉm cười, rút ra một cuốn sách cổ kính: "Đây là Thiên Địa Quyết, bộ tâm pháp cơ bản nhất của tu tiên giả. Hãy học thuộc lòng nó."

    Li Wei nhận lấy cuốn sách, cảm nhận được một luồng năng lượng kỳ lạ truyền vào người mình. Đây chính là bước đầu tiên trên con đường tu tiên của cậu.

    Từ đêm hôm đó, Li Wei bắt đầu luyện tập theo Thiên Địa Quyết. Mỗi đêm, cậu ngồi thiền dưới ánh trăng, hấp thụ tinh hoa nhật nguyệt. Dần dần, cậu cảm nhận được sự thay đổi trong cơ thể mình.

    Sức mạnh tăng lên từng ngày, các giác quan trở nên nhạy bén hơn. Li Wei biết rằng mình đã bước vào một thế giới hoàn toàn mới - thế giới của những tu tiên giả.

    Nhưng con đường phía trước còn dài và đầy thử thách. Liệu Li Wei có thể vượt qua tất cả để trở thành một tu tiên giả thực sự?
  `;

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 border-b transition-colors duration-200 ${
        isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      }`}>
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href={`/stories/${params.id}`}>
                <Button variant="ghost" size="sm">
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Quay lại
                </Button>
              </Link>
              
              <div className="hidden md:block">
                <h1 className="font-semibold">{story.title}</h1>
                <p className="text-sm text-gray-500">
                  Chương {chapter.chapterNumber}: {chapter.title}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowTOC(!showTOC)}
              >
                <Menu className="w-4 h-4" />
              </Button>
              
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Table of Contents Sidebar */}
        {showTOC && (
          <aside className={`w-80 border-r transition-colors duration-200 ${
            isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
          }`}>
            <div className="p-4">
              <h3 className="font-semibold mb-4">Mục lục</h3>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {storyChapters.map(ch => (
                  <Link
                    key={ch.id}
                    href={`/stories/${params.id}/chapters/${ch.id}`}
                    className={`block p-2 rounded text-sm transition-colors ${
                      ch.id === parseInt(params.cid)
                        ? 'bg-blue-100 text-blue-900'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    Chương {ch.chapterNumber}: {ch.title}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        )}

        {/* Main Content */}
        <main className="flex-1">
          <div className="max-w-4xl mx-auto px-4 py-8">
            {/* Chapter Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">
                Chương {chapter.chapterNumber}: {chapter.title}
              </h1>
              <p className="text-gray-500">
                {new Date(chapter.publishedAt).toLocaleDateString('vi-VN')} • 
                {chapter.views.toLocaleString()} lượt xem
              </p>
            </div>

            {/* Chapter Content */}
            <div 
              className="prose prose-lg max-w-none leading-relaxed"
              style={{ fontSize: `${fontSize}px`, lineHeight: 1.8 }}
            >
              {mockContent.split('\n').map((paragraph, index) => (
                paragraph.trim() && (
                  <p key={index} className="mb-6">
                    {paragraph.trim()}
                  </p>
                )
              ))}
            </div>

            {/* Chapter Navigation */}
            <div className="flex justify-between items-center mt-12 pt-8 border-t">
              {prevChapter ? (
                <Link href={`/stories/${params.id}/chapters/${prevChapter.id}`}>
                  <Button variant="outline">
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Chương trước
                  </Button>
                </Link>
              ) : (
                <div></div>
              )}

              {nextChapter ? (
                <Link href={`/stories/${params.id}/chapters/${nextChapter.id}`}>
                  <Button>
                    Chương sau
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </main>
      </div>

      {/* Bottom Control Bar */}
      <div className={`fixed bottom-0 left-0 right-0 border-t transition-colors duration-200 ${
        isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      }`}>
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Font Size Controls */}
              <div className="flex items-center space-x-2">
                <span className="text-sm">A</span>
                <input
                  type="range"
                  min="12"
                  max="24"
                  value={fontSize}
                  onChange={(e) => setFontSize(parseInt(e.target.value))}
                  className="w-20"
                />
                <span className="text-lg">A</span>
              </div>

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsDarkMode(!isDarkMode)}
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>

              {/* TTS Controls */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsTTSPlaying(!isTTSPlaying)}
              >
                {isTTSPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </Button>
            </div>

            <div className="flex items-center space-x-2">
              {/* Auto Scroll */}
              <Button
                variant={isAutoScroll ? "primary" : "ghost"}
                size="sm"
                onClick={() => setIsAutoScroll(!isAutoScroll)}
              >
                Auto Scroll
              </Button>

              {/* Actions */}
              <Button variant="ghost" size="sm">
                <Bookmark className="w-4 h-4" />
              </Button>
              
              <Button variant="ghost" size="sm">
                <MessageCircle className="w-4 h-4" />
              </Button>
              
              <Button variant="ghost" size="sm">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-2">
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div 
                className="bg-blue-600 h-1 rounded-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / storyChapters.length) * 100}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Chương {chapter.chapterNumber}</span>
              <span>{currentIndex + 1} / {storyChapters.length}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom padding to account for fixed bar */}
      <div className="h-24"></div>
    </div>
  );
}