import { BindingKey } from "@loopback/core";
import { loggerService } from "./components/logger/logger.service";

/**
 * Binding keys used by this component.
 */
export namespace LogBinders {
  export const LOGGER = BindingKey.create<loggerService>('custom.log.logger');
}

/**
 * Enum to define the supported log levels
 */
export enum LOG_LEVEL {
  DEBUG,
  INFO,
  WARN,
  ERROR,
  OFF,
}
