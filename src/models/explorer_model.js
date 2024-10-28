import { Schema, model } from "mongoose";

const explorerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    fieldOfStudy: {
      type: String,
      required: true,
    },
    expeditionParticipated: {
      type: [Schema.Types.ObjectId],
      ref: "Expedition",
      required: true,
    },
  },
  { timestamps: true }
);

explorerSchema.pre("save", function (next) {
  this.totalCost = this.expeditionParticipated.reduce(
    (total, expeditionParticipated) => total + services.ref,
    0
  );
  next();
});

const Explorer = model("Explorer", explorerSchema);

export default Explorer;
