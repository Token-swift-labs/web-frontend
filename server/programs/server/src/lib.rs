use anchor_lang::prelude::*;

declare_id!("C8y9jqMCS81AR6r9Zq4FSCVAuERGNg4gaBgn3PaV2e8J");

#[program]
pub mod server {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
