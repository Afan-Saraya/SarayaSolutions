export default function ContactMap() {
  return (
    <div className="rounded-3xl overflow-hidden border-2 border-primary-500/20 shadow-xl h-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.2!2d18.413941!3d43.854925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758c8e8f1234567%3A0x1234567890abcdef!2sSkenderija%2C%20Sarajevo!5e0!3m2!1sen!2sba!4v1234567890"
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: '700px' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="grayscale-[30%] hover:grayscale-0 transition-all duration-500 w-full h-full"
      />
    </div>
  );
}
