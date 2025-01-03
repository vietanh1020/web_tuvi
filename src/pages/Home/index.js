function SvHome() {
  const features = [
    { title: 'Lá Số Tử Vi', description: 'Phân tích chi tiết về số mệnh và tương lai.' },
    { title: 'Ngày Tốt Xấu', description: 'Lựa chọn ngày lành để khởi đầu công việc.' },
    { title: 'Tử Vi Hàng Ngày', description: 'Cập nhật dự đoán mỗi ngày để sống tích cực hơn.' },
  ];

  const testimonials = [
    {
      name: 'Nguyễn Văn A',
      feedback: 'Trang web đã giúp tôi hiểu hơn về số mệnh. Rất chính xác và thú vị!',
      image: 'https://via.placeholder.com/100',
    },
    {
      name: 'Trần Thị B',
      feedback: 'Tôi rất thích phần dự đoán hàng ngày. Mọi thứ rất hữu ích!',
      image: 'https://via.placeholder.com/100',
    },
    {
      name: 'Lê Hữu C',
      feedback: 'Giao diện thân thiện, dễ sử dụng. Rất đáng để trải nghiệm.',
      image: 'https://via.placeholder.com/100',
    },
  ];

  return (
    <div>
      <section id="home" className="bg-gradient-to-r from-purple-500 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Khám Phá Vận Mệnh Với <span className="text-yellow-300">Tử Vi Huyền Bí</span>
          </h1>
          <p className="text-lg mb-8">
            Cung cấp thông tin chi tiết về lá số tử vi, ngày tốt xấu, và nhiều điều bí ẩn trong cuộc sống của bạn.
          </p>
          <a href="#cta" className="px-6 py-3 bg-yellow-400 text-purple-700 font-bold rounded hover:bg-yellow-500">
            Tìm Hiểu Ngay
          </a>
        </div>
      </section>

      <section id="features" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Tính Năng Nổi Bật</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 shadow-md rounded-lg text-center">
                <h3 className="text-xl font-bold text-purple-600 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Người Dùng Nói Gì?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((item, index) => (
              <div key={index} className="bg-white p-6 shadow-lg rounded-lg text-center">
                <img src={item.image} alt={item.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
                <p className="italic text-gray-600">"{item.feedback}"</p>
                <h4 className="text-purple-600 font-bold mt-4">{item.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default SvHome;
