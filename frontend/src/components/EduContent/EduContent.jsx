import React from "react";
import "./EduContent.css";
import ButtonLink from "../ButtonLink/ButtonLink";

//This is where OpenAI API response would go
//Placeholder structure/content can then be deleted

function EduContent({}) {
  return (
    <div className="educontent">
      <div className="educontent__placeholder">
        <h2>
          Here's what you should know about _____ [Using causes of WWI as
          example]
        </h2>
        <div>
          <p>
            The outbreak of World War I, also known as the Great War, was the
            result of a complex set of factors that had been building up over
            decades. The war began in the summer of 1914, and its causes can be
            broadly understood through the lens of several key factors:
            nationalism, militarism, alliances, imperialism, and the specific
            events that triggered the war. Let’s break them down:
          </p>
          <h3>1. Nationalism</h3>
          <p>
            Nationalism, the belief in the superiority and interests of one's
            own nation, was a powerful force in Europe in the early 20th
            century. Nationalist sentiments, especially in the Balkans, were a
            major contributor to tensions between the great powers. Balkan
            Nationalism: The Balkans were a particularly volatile region, with
            various Slavic groups seeking independence from the Austro-Hungarian
            Empire or the Ottoman Empire. Serbia, in particular, supported these
            nationalist movements, which angered Austria-Hungary, which feared
            the breakup of its empire. Pan-Slavism: Russia saw itself as the
            protector of Slavic peoples, which included supporting Serbia in its
            conflicts with Austria-Hungary.
          </p>
          <h3>2. Militarism</h3>
          <p>
            The major European powers had been building up their military forces
            throughout the late 19th and early 20th centuries. This arms race,
            particularly between Germany and Britain (naval arms race), created
            an environment where countries were ready to resort to military
            conflict to settle disputes. Mobilization Plans: Many countries had
            detailed plans for how they would mobilize their forces in the event
            of war. These plans were often rigid and did not leave room for
            diplomatic solutions once war seemed imminent. For example, Germany
            had the Schlieffen Plan, which called for a rapid attack on France
            through Belgium to avoid a two-front war with France and Russia.
          </p>
          <h3>3. Alliance Systems</h3>
          <p>
            European powers had formed complex alliances with each other, which
            meant that a conflict involving one country could quickly escalate
            into a broader war. The two main alliances were: Triple Alliance:
            Germany, Austria-Hungary, and Italy (although Italy would eventually
            switch sides during the war). Triple Entente: France, Russia, and
            the United Kingdom. These alliances were intended to provide
            security, but they also meant that any localized conflict could
            trigger a wider war. For instance, when Austria-Hungary declared war
            on Serbia, Russia, as an ally of Serbia, mobilized its forces, which
            led to Germany declaring war on Russia, and so on.
          </p>
          <h3>4. Imperialism</h3>
          <p>
            European powers were also competing for colonies and resources
            around the world, and tensions were high in places like Africa and
            Asia. The competition for global dominance, particularly between
            Britain, France, and Germany, contributed to the growing rivalries
            among the great powers of Europe.
          </p>
          <h3>5. The Assassination of Archduke Franz Ferdinand</h3>
          <p>
            The immediate cause of World War I was the assassination of Archduke
            Franz Ferdinand, the heir to the Austro-Hungarian throne, and his
            wife, Sophie, in Sarajevo on June 28, 1914. The assassin, Gavrilo
            Princip, was a member of a Serbian nationalist group, the Black
            Hand, which wanted to free Slavs under Austro-Hungarian rule.
            Austria-Hungary blamed Serbia for the assassination, even though the
            Serbian government had no direct involvement. Austria-Hungary, with
            the backing of Germany, issued an ultimatum to Serbia, demanding
            harsh terms. Serbia agreed to most of the demands but rejected a
            few. Austria-Hungary, seeking to crush Serbian nationalism, declared
            war on Serbia on July 28, 1914.
          </p>
          <h3>6. Escalation of the Conflict</h3>
          <p>
            Once Austria-Hungary declared war on Serbia, the alliance system
            quickly turned a regional conflict into a world war: Russia, allied
            with Serbia, began to mobilize its army in defense of Serbia, which
            led Germany to declare war on Russia on August 1, 1914. Germany then
            declared war on France on August 3, 1914, and invaded Belgium, which
            brought Britain into the war on August 4, 1914, due to its alliance
            with Belgium. Austria-Hungary was soon at war with Russia, and
            France, Britain, and their allies (including Japan) were at war with
            Austria-Hungary and Germany.
          </p>
        </div>
      </div>
      <ButtonLink to="/activity" className="educontent__go-btn">
        How can I learn all this?
      </ButtonLink>
    </div>
  );
}

export default EduContent;
