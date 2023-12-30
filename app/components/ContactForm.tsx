"use client";

export default function ContactForm() {
  return (
    <form onSubmit={() => console.log("Submit success")}>
      <div className="relative group">
        <label htmlFor="name" className="sr-only">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="mb-6 w-full max-w-[570px] border border-slate-700 rounded outline-none px-4 py-3 focus:border-slate-400"
          placeholder="Name"
        />
      </div>

      <div className="relative group">
        <label htmlFor="email" className="sr-only">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="mb-6 w-full max-w-[570px] border border-slate-700 rounded outline-none px-4 py-3 focus:border-slate-400"
          placeholder="Email"
        />
      </div>

      <div className="relative group">
        <label htmlFor="name" className="sr-only">Message</label>
        <textarea
          name="message"
          id="message"
          required
          className="mb-6 w-full h-40 max-w-[570px] border border-slate-700 rounded outline-none px-4 py-3 focus:border-slate-400 resize-none"
          placeholder="Message"
        />
      </div>

      <button className="h-[52px] bg-slate-200 text-black px-6 rounded">Send Message</button>
    </form>
  );
}
