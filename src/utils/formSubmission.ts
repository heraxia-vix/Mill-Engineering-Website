export interface FormSubmissionResult {
  success: boolean;
  message?: string;
}

/**
 * Sends a website enquiry through FormSubmit's hosted form endpoint.
 * This works with the static GitHub Pages deployment and does not require
 * a custom backend or a mail client on the visitor's device.
 */
export async function submitWebsiteForm(
  recipient: string,
  subject: string,
  fields: Record<string, string>
): Promise<FormSubmissionResult> {
  const response = await fetch(`https://formsubmit.co/ajax/${recipient}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      ...fields,
      _subject: subject,
      _template: 'table',
      _replyto: fields.email || '',
      _url: window.location.href
    })
  });

  let result: { success?: boolean; message?: string } = {};
  try {
    result = await response.json();
  } catch {
    // Keep the HTTP status as the fallback signal below.
  }

  if (!response.ok || result.success === false) {
    throw new Error(result.message || 'Unable to submit the enquiry. Please try again.');
  }

  return {
    success: true,
    message: result.message
  };
}
