import assert from "node:assert/strict";
import { hasUnknownModel } from "../model-filter.mjs";

for (const label of [undefined, "", "Unknown", "Unknown — not disclosed", "Unknown — not established", "Not identified in the cited report", "Not identified in cited sources", "Claude Code; underlying model not disclosed", "Replit Agent; underlying model not disclosed", "Cairn agents; underlying model unverified", "Hermes Agent — underlying model at exposure unknown", "Doubao app; underlying model and version unknown", "AI CLI tools; underlying model versions not established", "Internal research model; name not disclosed", "Internal research model; exact name unknown", "Unnamed internal research model", "Unreleased non-frontier research model", "Unreleased internal models"]) {
  assert.equal(hasUnknownModel(label), true, `Unknown model label: ${label}`);
}
for (const label of ["Claude Mythos 5", "Claude — version unknown", "DeepSeek — exact version unknown", "Kimi K3; exact checkpoint not disclosed", "ROME development agent; Qwen3-MoE-based project, exact checkpoint unknown", "IM1 research agents", "GPT-5.6 Sol family (internal research model)", "Claude; specific versions and recipient models unknown"]) {
  assert.equal(hasUnknownModel(label), false, `Preserve partial attribution: ${label}`);
}
console.log("PASS: unknown identity labels and known-family/version boundaries");
