'use server';

export type QuoteState = {
  status: 'idle' | 'success' | 'error';
  message: string;
};

export const initialQuoteState: QuoteState = { status: 'idle', message: '' };

/**
 * Demo enquiry handler.
 *
 * This is an ENQUIRY form, not a booking: nothing is reserved or confirmed.
 * In the demo build the payload is validated only — no data is stored or
 * sent. Before launch, connect this action to the company inbox/WhatsApp.
 */
export async function submitQuote(
  _prev: QuoteState,
  formData: FormData,
): Promise<QuoteState> {
  const fullName = String(formData.get('fullName') ?? '').trim();
  const phone = String(formData.get('phone') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim();
  const interest = String(formData.get('interest') ?? '').trim();

  if (!fullName) {
    return { status: 'error', message: 'Please enter your full name.' };
  }
  if (!phone && !email) {
    return {
      status: 'error',
      message: 'Please provide a phone number or an email address so we can respond.',
    };
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: 'error', message: 'Please enter a valid email address.' };
  }
  if (!interest) {
    return {
      status: 'error',
      message: 'Please tell us which equipment or service you are interested in.',
    };
  }

  return {
    status: 'success',
    message: `Thank you, ${fullName}. Your enquiry passed validation. This demo does not send messages yet — before launch the form will be connected to the company inbox and WhatsApp so your team receives every enquiry.`,
  };
}
