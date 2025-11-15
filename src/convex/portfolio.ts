import { query, mutation } from "./_generated/server";
import { v } from "convex/values";
import { paginationOptsValidator } from "convex/server";

export const getPortfolioItems = query({
  args: { paginationOpts: paginationOptsValidator },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("portfolioItems")
      .order("desc")
      .paginate(args.paginationOpts);
  },
});

export const addPortfolioItem = mutation({
  args: {
    title: v.string(),
    category: v.union(
      v.literal("video"),
      v.literal("branding"),
      v.literal("design"),
      v.literal("social"),
    ),
    description: v.string(),
    fullDescription: v.string(),
    imageUrl: v.string(),
    videoUrl: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("portfolioItems", args);
  },
});