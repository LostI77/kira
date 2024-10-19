import { useLoaderData } from "react-router-dom";
import { StrictMode, useEffect, useState } from "react";
import { Icon } from "@iconify/react";

import { SupportCardData } from "@/main-types";

import { Input } from "@components/input";
import { Badge } from "@components/badge";
import { Accordion } from "@components/accordion";
import { SupportCard } from "@composites/support-card";
import { support_categories, faqs } from "@/common/constants";

export const Support = () => {
  const { support_cards } = useLoaderData() as {
    support_cards: SupportCardData[];
  };

  const [supportCards, setSupportCards] =
    useState<SupportCardData[]>(support_cards);

  useEffect(() => {
    setSupportCards(support_cards);
  }, [support_cards]);

  return (
    <StrictMode>
      <div className="flex flex-col py-16 px-[120px] gap-6">
        <div className="flex flex-col justify-center items-center w-max mx-auto gap-4">
          <div className="w-[650px] relative">
            <Input placeholder="Buscar..." />
          </div>
          <div className="flex flex-row flex-wrap w-[650px] gap-1.5">
            {support_categories.map((c, _) => (
              <Badge key={`badge-categories-${c.key}`}>{c.category}</Badge>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] flex justify-center flex-row flex-wrap mx-auto py-16 px-6 gap-6">
        {supportCards && supportCards.length === 0 ? (
          <div className="text-lg py-36">
            Error in support cards information
          </div>
        ) : (
          supportCards.map((sc, i) => (
            <SupportCard key={`support-card-static-item-${i}`}>
              <Icon
                className="size-7"
                icon={"pepicons-pencil:checkmark-filled-circle-filled"}
              />
              <div className="w-full">
                <SupportCard.Title>{sc.title}</SupportCard.Title>
                <SupportCard.Description>
                  {sc.description}
                </SupportCard.Description>
              </div>
            </SupportCard>
          ))
        )}
      </div>
      <div className="flex flex-col flex-nowrap w-[1200px] mx-auto p-6 gap-6">
        <h2 className="font-semibold text-3xl">Preguntas Frecuentes</h2>
        <div className="grid grid-cols-2 auto-rows-max gap-6">
          {faqs.map((f, i) => (
            <div key={`faq-static-item-${i}`} className="col-span-1 row-span-1">
              <Accordion>
                <Accordion.Trigger>{f.question}</Accordion.Trigger>
                <Accordion.Content>{f.answer}</Accordion.Content>
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </StrictMode>
  );
};
