import "server-only";

import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const PLAN_PRICE_ID = {
  'seeker_pro' : "price_1TgqlDHk8J4AUw0pPhAB0jCD",
  'seeker_premium' : "price_1TgvuSHk8J4AUw0pdGgKRrUF",
  'recruiter_growth' : "price_1TgvvnHk8J4AUw0pQfoVel4d",
  'recruiter_enterprice' : "price_1TgvwvHk8J4AUw0p6uQMyoCy",
};
