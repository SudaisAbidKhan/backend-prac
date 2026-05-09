import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    subcriber: {
      type: mongoose.Schema.Types.ObjectId, // one who is subcribing
      ref: User,
    },
    channel: {
      type: mongoose.Schema.Types.ObjectId, // one to whom subscriber is subcribing
      ref: User,
    },
  },
  { timestamps: true },
);

export const Subscription =
  mongoose.models.Subscription ||
  mongoose.model("Subcription", subscriptionSchema);
