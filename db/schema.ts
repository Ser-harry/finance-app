import { pgTable, text } from "drizzle-orm/pg-core";

export const accounts = pgTable("accounts", {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    userId: text("userId").notNull(),
    plaidId: text("plaidId").notNull()
    
});

