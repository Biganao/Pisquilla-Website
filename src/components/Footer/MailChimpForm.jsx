import MailchimpSubscribe from "react-mailchimp-subscribe";
import  Newsletter  from "./Newsletter";

export const MailChimpForm = () => {
  const postUrl = `https://app.us17.list-manage.com/subscribe/post?u=5f781ae18fb5016aa37a0b220&amp;id=8527d5d447&amp;f_id=002d65e0f0`;

  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <Newsletter
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </>
  );
};