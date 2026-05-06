export type Testimonial = {
  name: string;
  initials: string;
  role: string;
  rating: number;
  text: string;
  plan: string;
  highlighted?: boolean;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah M.",
    initials: "SM",
    role: "MSc Public Health · Manchester",
    rating: 5,
    text: "Got a distinction on my poster. Delivered a full day early and the design was sharper than anything I could have made myself.",
    plan: "Poster Design",
    highlighted: true
  },
  {
    name: "James O.",
    initials: "JO",
    role: "BSc Nursing · Leeds",
    rating: 5,
    text: "Honestly saved me. The assessment was clean, properly referenced, and read like something I would have written if I had three more weeks.",
    plan: "Assessment",
    highlighted: true
  },
  {
    name: "Aisha K.",
    initials: "AK",
    role: "MSc Data Science · Birmingham",
    rating: 5,
    text: "The combo was the best money I spent this term. Poster + assessment came back together, fully aligned. Easy distinction.",
    plan: "Combo",
    highlighted: true
  },
  {
    name: "Daniel R.",
    initials: "DR",
    role: "BEng Final Year · Cardiff",
    rating: 5,
    text: "FYP delivery was flawless. Full report, presentation deck, and documentation, everything tied together. Supervisor was impressed.",
    plan: "Final Year Project"
  },
  {
    name: "Priya S.",
    initials: "PS",
    role: "MPharm · King's College London",
    rating: 5,
    text: "Communication on WhatsApp was instant. Sent my brief at midnight, had a draft back the next afternoon. Smooth process.",
    plan: "Assessment"
  },
  {
    name: "Tom W.",
    initials: "TW",
    role: "BA Business · Strathclyde",
    rating: 5,
    text: "Worth every pound. The express turnaround on the poster genuinely saved my submission deadline.",
    plan: "Poster Design"
  },
  {
    name: "Chloe B.",
    initials: "CB",
    role: "BSc Psychology · Bristol",
    rating: 5,
    text: "Came back exactly to the rubric. Revisions were no fuss, no questions. I'll be back for the next module.",
    plan: "Assessment"
  },
  {
    name: "Ahmed F.",
    initials: "AF",
    role: "MSc Computer Science · Glasgow",
    rating: 5,
    text: "Final year project on a tight timeline. Documentation and slides were properly thought out, not just slapped together.",
    plan: "Final Year Project"
  }
];

export type FAQ = { q: string; a: string };

export const FAQS: FAQ[] = [
  {
    q: "How quickly can you start on my order?",
    a: "Usually within the same day. Once your brief is in via WhatsApp or the order form, you'll get a confirmation and an estimated delivery slot within minutes during working hours."
  },
  {
    q: "What if I need revisions?",
    a: "Revisions are included on every plan until you're satisfied with the final result. Just reply on WhatsApp or email with what you'd like adjusted, no extra charge for normal scope changes."
  },
  {
    q: "Is the work original, plagiarism-free, and AI-free?",
    a: "Yes on all three. Every piece is human-written from scratch, structured around your specific brief, with zero AI-generated content. Turnitin-style and AI-detection checks can be run on request before final delivery."
  },
  {
    q: "How do I share my brief and files?",
    a: "Easiest path: open the order modal and attach your file, or message us directly on WhatsApp. We accept PDFs, Word docs, slides, briefs, screenshots, anything that helps clarify what you need."
  },
  {
    q: "What about payment?",
    a: "Payment is handled directly after we confirm scope and delivery. Bank transfer, PayPal, and Wise are all supported. No hidden fees, the price you see is the price you pay."
  },
  {
    q: "Is my information kept confidential?",
    a: "Always. Your name, university, and brief are never shared. Files are deleted from our systems on request once the order is closed."
  },
  {
    q: "What if I miss my deadline window?",
    a: "We deliver inside the agreed window or you don't pay full price. If something genuinely goes wrong on our side, we'll discount or refund. No drama."
  }
];
