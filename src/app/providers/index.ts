import type { TWithProviders } from "./types.ts"
import compose from "compose-function"
import { withRouter } from "./withRouter"
import {withStore} from "@/app/providers/withStore.tsx";

export const withProviders: TWithProviders = compose(withRouter, withStore)