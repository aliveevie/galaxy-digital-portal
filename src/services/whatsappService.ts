/**
 * WhatsApp Business API Service
 * This service handles interactions with the WhatsApp Business Cloud API
 */

// WhatsApp Business API configuration
interface WhatsAppConfig {
  apiVersion: string;
  phoneNumberId: string;
  accessToken: string;
  businessAccountId: string;
  recipientPhoneNumber: string; // Default support number
}

// Default configuration - Using environment variables
const whatsAppConfig: WhatsAppConfig = {
  apiVersion: "v17.0", // Current API version
  phoneNumberId: process.env.REACT_APP_WHATSAPP_PHONE_NUMBER_ID || "",
  accessToken: process.env.REACT_APP_WHATSAPP_ACCESS_TOKEN || "",
  businessAccountId: process.env.REACT_APP_WHATSAPP_BUSINESS_ACCOUNT_ID || "",
  recipientPhoneNumber: process.env.REACT_APP_WHATSAPP_RECIPIENT_NUMBER || "", // Format: +1XXXXXXXXXX
};

/**
 * Send a text message to WhatsApp
 * @param message The message to send
 * @param recipientPhone Optional override for recipient phone number
 * @returns Promise with the API response
 */
export const sendWhatsAppMessage = async (
  message: string,
  recipientPhone: string = whatsAppConfig.recipientPhoneNumber
): Promise<any> => {
  try {
    const url = `https://graph.facebook.com/${whatsAppConfig.apiVersion}/${whatsAppConfig.phoneNumberId}/messages`;
    
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${whatsAppConfig.accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: recipientPhone,
        type: "text",
        text: {
          preview_url: false,
          body: message,
        },
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("WhatsApp API Error:", errorData);
      throw new Error(`WhatsApp API Error: ${errorData.error?.message || "Unknown error"}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to send WhatsApp message:", error);
    throw error;
  }
};

/**
 * Send a message with media to WhatsApp
 * @param mediaUrl URL of the media to send
 * @param mediaType Type of media (image, document, audio, video)
 * @param caption Optional caption for the media
 * @param recipientPhone Optional override for recipient phone number
 * @returns Promise with the API response
 */
export const sendWhatsAppMedia = async (
  mediaUrl: string,
  mediaType: "image" | "document" | "audio" | "video",
  caption?: string,
  recipientPhone: string = whatsAppConfig.recipientPhoneNumber
): Promise<any> => {
  try {
    const url = `https://graph.facebook.com/${whatsAppConfig.apiVersion}/${whatsAppConfig.phoneNumberId}/messages`;
    
    const payload: any = {
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: recipientPhone,
      type: mediaType,
      [mediaType]: {
        link: mediaUrl,
      },
    };

    // Add caption if provided (only works for image, video, and document)
    if (caption && (mediaType === "image" || mediaType === "video" || mediaType === "document")) {
      payload[mediaType].caption = caption;
    }

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${whatsAppConfig.accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("WhatsApp API Error:", errorData);
      throw new Error(`WhatsApp API Error: ${errorData.error?.message || "Unknown error"}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to send WhatsApp media:", error);
    throw error;
  }
};

/**
 * Send a template message to WhatsApp
 * This is required for the first message to a user who hasn't messaged you in the last 24 hours
 * @param recipientPhone The recipient's phone number
 * @returns Promise with the API response
 */
export const sendWhatsAppTemplate = async (
  recipientPhone: string
): Promise<any> => {
  try {
    const url = `https://graph.facebook.com/${whatsAppConfig.apiVersion}/${whatsAppConfig.phoneNumberId}/messages`;
    
    // Using a simple hello_world template which is available by default
    // You may need to replace this with a template that exists in your WhatsApp Business account
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${whatsAppConfig.accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: recipientPhone,
        type: "template",
        template: {
          name: "hello_world",
          language: {
            code: "en_US"
          }
        }
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("WhatsApp API Error:", errorData);
      throw new Error(`WhatsApp API Error: ${errorData.error?.message || "Unknown error"}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to send WhatsApp template:", error);
    throw error;
  }
};

/**
 * Check the status of a message
 * @param messageId ID of the message to check
 * @returns Promise with the message status
 */
export const checkMessageStatus = async (messageId: string): Promise<any> => {
  try {
    const url = `https://graph.facebook.com/${whatsAppConfig.apiVersion}/${messageId}`;
    
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${whatsAppConfig.accessToken}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("WhatsApp API Error:", errorData);
      throw new Error(`WhatsApp API Error: ${errorData.error?.message || "Unknown error"}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to check message status:", error);
    throw error;
  }
};

export default {
  sendWhatsAppMessage,
  sendWhatsAppMedia,
  sendWhatsAppTemplate,
  checkMessageStatus,
};
