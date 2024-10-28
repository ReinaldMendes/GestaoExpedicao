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

// Campo virtual para contar o número de expedições
explorerSchema.virtual("expeditionCount").get(function () {
  return this.expeditionParticipated.length;
});

// Configuração para garantir que os campos virtuais sejam incluídos ao converter o documento em JSON
explorerSchema.set("toJSON", { virtuals: true });
explorerSchema.set("toObject", { virtuals: true });

const Explorer = model("Explorer", explorerSchema);

export default Explorer;
