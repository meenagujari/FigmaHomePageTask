import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import contentData from "../client/src/data/content.json";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint to serve content data
  app.get("/api/content", (req, res) => {
    res.json(contentData);
  });

  // API endpoint for newsletter subscription
  app.post("/api/newsletter", (req, res) => {
    const { email } = req.body;
    
    if (!email || !email.includes('@')) {
      return res.status(400).json({ message: "Valid email is required" });
    }
    
    // In a real application, this would save to a database or send to an email service
    console.log(`Newsletter subscription: ${email}`);
    
    res.json({ message: "Successfully subscribed to newsletter" });
  });

  // API endpoint for contact form submissions
  app.post("/api/contact", (req, res) => {
    const { name, email, message, phone } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ message: "Name, email, and message are required" });
    }
    
    // In a real application, this would save to database or send email
    console.log(`Contact form submission:`, { name, email, message, phone });
    
    res.json({ message: "Your message has been sent successfully" });
  });

  const httpServer = createServer(app);

  return httpServer;
}
