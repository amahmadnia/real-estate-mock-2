const Description = ({ description }) => {
  return (
    <div className="card">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">توضیحات ملک</h2>

      <div className="prose prose-lg max-w-none">
        {description.split('\n\n').map((paragraph, index) => (
          <p
            key={index}
            className="text-gray-700 leading-relaxed mb-4 text-justify"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Description;
